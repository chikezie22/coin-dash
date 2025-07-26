const CoinCard = ({ coin }) => {
  return (
    <div className="group">
      <div className="p-4 bg-green-50 rounded-2xl border border-slate-300 shadow-md flex items-center gap-4 w-full cursor-pointer group-hover:bg-slate-800 transition duration-500">
        <img src={coin.image} alt={coin.name} className="h-10 w-10" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg group-hover:text-white">{coin.name}</h2>
            <span className="uppercase text-sm text-gray-500  group-hover:text-gray-200">
              {coin.symbol}
            </span>
          </div>
          <p className="text-sm text-gray-700 group-hover:text-gray-400">
            Price: ${coin.current_price.toLocaleString()}
          </p>
          <p
            className={`text-sm font-medium ${
              coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}% (24h)
          </p>
          <p className="text-sm text-gray-600 group-hover:text-gray-300">
            Market Cap: ${coin.market_cap.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 group-hover:text-gray-200">
            Price Change: ${coin.price_change_24h.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
