import { Link, NavLink, useLocation } from 'react-router';
import { Logo } from '../assets';
import LimitSelector from './limit-selector';

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
];

const Header = ({ limit, setLimit }) => {
  const location = useLocation();

  return (
    <header className="bg-green-200 py-4 sticky top-0 left-0 right-0">
      <nav className="w-[90%] max-w-[1440px] mx-auto   flex justify-between items-center">
        <img src={Logo} alt="logo" className="h-[28px] w-auto" />
        <div className="flex items-center gap-5 ">
          {location.pathname === '/' && <LimitSelector limit={limit} setLimit={setLimit} />}
          <ul className="flex items-center gap-3 font-medium">
            {links.map((link) => (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'font-medium text-sm' : 'font-normal text-gray-500'
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
