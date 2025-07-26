import { Logo } from '../assets';
import LimitSelector from './limit-selector';
const Header = ({ limit, setLimit }) => {
  return (
    <header className="bg-green-50">
      <nav className="w-[90%] max-w-[1440px] mx-auto  p-4 sticky top-5 flex justify-between items-center">
        <img src={Logo} alt="logo" className="h-[28px] w-auto" />
        <LimitSelector limit={limit} setLimit={setLimit} />
      </nav>
    </header>
  );
};

export default Header;
