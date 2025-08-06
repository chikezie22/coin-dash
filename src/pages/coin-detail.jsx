import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Spinner from '../components/spinner';
import CoinChart from '../components/coin-chart';

const Page = () => {
  const [coin, setCoin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const url = import.meta.env.VITE_API_URL;
  console.log(coin?.market_cap);
  useEffect(() => {
    setIsLoading(true);
    const fetchCoinDetail = async () => {
      try {
        const response = await fetch(`${url}coins/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCoin(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoinDetail();
  }, [id, url]);
  if (isLoading) return <Spinner />;
  return (
    <div className="space-y-4">
      <Link to="/" className=" text-gray-500 font-medium">
        {'<'} back
      </Link>
      <div className="grid place-items-center gap-4">
        <h2 className={`font-bold text-lg `}> {coin.name} </h2>
        <picture>
          <source media="(width >= 650px)" srcSet={`${coin?.image?.small}`} />
          <source media="(width >= 449px)" srcSet={`${coin?.image?.small}`} />
          <img src={`${coin?.image?.thumb}`} alt="coin-image" />
        </picture>
        <p className="text-pretty font-medium text-justify">
          Description: {coin?.description?.en.split('.').slice(0, 6).join('. ') + '.'}
        </p>
        <div className="flex flex-wrap gap-3 text-sm ">
          <p className="text-green-500">Rank: {coin?.market_cap_rank}</p>
          <p className="text-green-500">
            Current Price: ${coin?.market_data?.current_price?.usd.toLocaleString()}
          </p>
          <p className="text-green-500">
            Market Cap: ${coin?.market_data?.market_cap?.usd?.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-green-500">
          <p>High 24hrs: ${coin?.market_data?.high_24h?.usd.toLocaleString()}</p>
          <p>Low 24hrs: ${coin?.market_data?.low_24h?.usd?.toLocaleString()}</p>
          <p>Price Change 24hrs: ${coin?.market_data?.price_change_24h?.toLocaleString()}</p>
        </div>
        <p className="text-gray-700 text-justify text-pretty">
          Categories: {coin?.categories?.join(', ')}
        </p>
        <p className="italic text-sm font-medium">
          Last Updated: {new Date(coin?.market_data?.last_updated).toLocaleString()}
        </p>
        <CoinChart coinId={id} />
      </div>
    </div>
  );
};

export default Page;
