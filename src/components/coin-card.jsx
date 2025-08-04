import { useState } from 'react';
import { Link } from 'react-router';

const CoinCard = ({ coin }) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className="group"
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
        onTouchCancel={() => setIsTouched(false)}
      >
        <div
          className={`p-4 rounded-2xl border border-slate-300 shadow-md flex items-center gap-4 w-full cursor-pointer transition duration-500
            ${isTouched ? 'bg-slate-800' : 'bg-green-50'} group-hover:bg-slate-800
          `}
        >
          <img src={coin.image} alt={coin.name} className="h-10 w-10" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2
                className={`font-bold text-lg ${
                  isTouched ? 'text-white' : ''
                } group-hover:text-white`}
              >
                {coin.name}
              </h2>
              <span
                className={`uppercase text-sm ${
                  isTouched ? 'text-gray-200' : 'text-gray-500'
                } group-hover:text-gray-200`}
              >
                {coin.symbol}
              </span>
            </div>
            <p
              className={`text-sm ${
                isTouched ? 'text-gray-400' : 'text-gray-700'
              } group-hover:text-gray-400`}
            >
              Price: ${coin.current_price.toLocaleString()}
            </p>
            <p
              className={`text-sm font-medium ${
                coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}% (24h)
            </p>
            <p
              className={`text-sm ${
                isTouched ? 'text-gray-300' : 'text-gray-600'
              } group-hover:text-gray-300`}
            >
              Market Cap: ${coin.market_cap.toLocaleString()}
            </p>
            <p
              className={`text-xs ${
                isTouched ? 'text-gray-200' : 'text-gray-500'
              } group-hover:text-gray-200`}
            >
              Price Change: ${coin.price_change_24h.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
