import { useEffect, useState } from 'react';
import Header from './components/header';
import CoinCard from './components/coin-card';
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
  useEffect(() => {
    setIsLoading(true);
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `${url}coins/markets?vs_currency=usd&per_page=${limit}&page=1`,
          options
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);
  return (
    <div>
      <Header iimit={limit} setLimit={setLimit} />
      <div className="max-w-[1440px] px-5 py-2.5 space-y-5">
        <div className="flex justify-center gap-2.5 sm:justify-between items-center flex-wrap ">
          <h1 className="text-3xl font-bold">Coin Dash 🚀</h1>
          <div className="font-medium text-slate-600 flex gap-2.5 text-nowrap max-sm:text-sm">
            <p>Crypto currencies</p>
            <p>Exchanges</p>
            <p>Learn</p>
            <p>Trade</p>
          </div>
        </div>
        <div>
          {isLoading ? (
            <p>Loading .....</p>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2.5 mx-auto place-content-center">
              {coins.map((coin) => (
                <CoinCard coin={coin} key={coin.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
