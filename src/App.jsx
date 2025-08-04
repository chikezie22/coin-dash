import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { About, Home, NotFound, CoinDetail } from './pages';
import Layout from './layout/layout';

const url = import.meta.env.VITE_API_URL;
// const apikey = import.meta.env.VITE_API_KEY;
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    // 'x-cg-pro-api-key': apikey,
  },
};
const App = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `${url}coins/markets?vs_currency=usd&per_page=${limit}&page=1`,
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoins();
  }, [limit, url]);
  return (
    <Routes>
      <Route path="/" element={<Layout limit={limit} setLimit={setLimit} />}>
        <Route index element={<Home coins={coins} isLoading={isLoading} error={error} />} />
        <Route path="about" element={<About />} />
        <Route path="coin/:id" element={<CoinDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
