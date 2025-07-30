import { Outlet } from 'react-router';
import Header from '../components/header';

export default function Layout({ limit, setLimit }) {
  return (
    <div className="max-w-[1440px] px-2.5 lg:px-5 py-2.5 space-y-5">
      <Header limit={limit} setLimit={setLimit} />
      <Outlet />
    </div>
  );
}
