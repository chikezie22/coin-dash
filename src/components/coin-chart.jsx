import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from 'chart.js';

import 'chartjs-adapter-date-fns';

const url = import.meta.env.VITE_API_URL;
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, TimeScale, Tooltip, Legend);

const CoinChart = ({ coinId }) => {
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Added missing error state

  useEffect(() => {
    setIsLoading(true);
    setError(null); // Reset error on new fetch

    const fetchCoinData = async () => {
      try {
        const response = await fetch(`${url}coins/${coinId}/market_chart?vs_currency=usd&days=7`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const prices = data?.prices?.map((price) => ({
          x: price[0],
          y: price[1],
        }));

        setCoinData({
          datasets: [
            {
              label: 'Prices (USD)',
              data: prices,
              fill: true, // Area under the line is filled
              borderColor: '#007bff', // Line color
              backgroundColor: 'rgba(0, 123, 255, 0.1)', // Fill color
              pointRadius: 0, // Hides points
              tension: 0.3, // Smooths out the line
            },
          ],
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoinData();
  }, [coinId, url]);

  if (isLoading) return <p>Loading chart...</p>;
  if (error) return <p>Error loading chart: {error}</p>; // Added error display
  if (!coinData) return <p>No chart data available</p>; // Added null check

  return (
    <div
      style={{
        margin: '50px auto',
        width: '80%',
        height: '500px',
        minHeight: '400px',
      }}
    >
      <div className="w-full grid place-items-center">
        <Line
          data={coinData}
          options={{
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true,
              },
            },
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: { mode: 'index', intersect: false },
            },
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 20,
                },
              },
              y: {
                ticks: {
                  callback: (value) => `$${value.toLocaleString()}`,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CoinChart;
