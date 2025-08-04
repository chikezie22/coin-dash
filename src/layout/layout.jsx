import { Outlet } from 'react-router';
import Header from '../components/header';

export default function Layout({ limit, setLimit }) {
  return (
    <>
      <Header limit={limit} setLimit={setLimit} />
      <div className="max-w-[1440px] px-2.5 lg:px-5 pb-2.5 space-y-5">
        <Outlet />
      </div>
    </>
  );
}
