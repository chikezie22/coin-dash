import CoinCard from '../components/coin-card';
import Header from '../components/header';
const Page = ({ limit, setLimit, isLoading, coins, error }) => {
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Header iimit={limit} setLimit={setLimit} />
      <div className="max-w-[1440px] px-2.5 lg:px-5 py-2.5 space-y-5">
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2.5 mx-auto lg:place-content-center">
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

export default Page;
