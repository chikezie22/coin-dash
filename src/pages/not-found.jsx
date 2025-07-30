import { NavLink } from 'react-router';
import { NotFound } from '../assets';
export default function Page() {
  return (
    <div className="px-4 py-10 grid md:grid-cols-2 gap-5 max-w-[1000px] place-items-center mx-auto">
      <picture>
        <source media="(min-width:650px)" srcSet={NotFound} />
        <img src={NotFound} alt="Not Found" className="w-full max-h-[400px]" />
      </picture>
      <div className="space-y-6">
        <p className="text-gray-700 text-base leading-relaxed">
          Oops, looks like this page wandered off into the enchanted blockchain forest like a lost
          Totoro with a misplaced Bitcoin wallet! Don't worry—our spirited crypto spirits are
          searching high and low. In the meantime, why not head back to the homepage and try again?
          If you're feeling adventurous, summon a new path with the search bar above. 404: Adventure
          Not Found... Yet!
        </p>
        <NavLink
          to="/"
          className="inline-block text-sm text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          ← Go back home
        </NavLink>
      </div>
    </div>
  );
}
