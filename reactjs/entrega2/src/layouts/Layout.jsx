import { Outlet } from 'react-router';

import Header from '@/components/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <main className='min-h-screen flex flex-col items-center justify-start gap-12'>
        <Outlet />
      </main>
    </div>
  );
}
