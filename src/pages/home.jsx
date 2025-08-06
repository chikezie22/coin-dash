import CoinCard from '../components/coin-card';
import Spinner from '../components/spinner';
const Page = ({ isLoading, coins, error }) => {
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="space-y-5 mt-2.5">
      <div className="flex justify-center gap-2.5 sm:justify-between items-center flex-wrap ">
        <h1 className="text-3xl font-bold text-green-700">Coin Dash 🚀</h1>
        <div className="font-medium  flex gap-2.5 text-nowrap max-sm:text-sm text-green-300">
          <p>Crypto currencies</p>
          <p>Exchanges</p>
          <p>Learn</p>
          <p>Trade</p>
        </div>
      </div>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2.5 mx-auto lg:place-content-center">
            {coins.map((coin) => (
              <CoinCard coin={coin} key={coin.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
