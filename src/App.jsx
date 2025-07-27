import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './pages';

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
  }, [limit]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home coins={coins} setLimit={setLimit} isLoading={isLoading} error={error} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
