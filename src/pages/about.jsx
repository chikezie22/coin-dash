import { NavLink } from 'react-router';
export default function Page() {
  return (
    <main className="max-w-[800px] mx-auto space-y-6 p-4 py-10 ">
      <h1 className="text-3xl font-bold text-green-700">About Coin Dash</h1>
      <p className="text-gray-700 text-base leading-relaxed">
        Coin Dash is a simple crypto dashboard that helps you keep track of popular coins, their
        prices, and basic info in real time. It's built for beginners who want a clean and easy way
        to explore the world of cryptocurrencies without all the noise.
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        This app was built using React and tailwind, and pulls live coin data from an external API.
        You can browse coins, check market info, and get a quick overview of crypto trends.
      </p>
      <NavLink
        to="/"
        className="inline-block text-sm text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        ← Go back home
      </NavLink>
    </main>
  );
}
