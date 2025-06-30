import { Outlet } from 'react-router';

import CartContextProvider from '@/contexts/cart';

import Header from '@/components/Header';
import FeatureContextProvider from '../contexts/feature';

export default function Layout() {
  return (
    <CartContextProvider>
      <Header />
      <main className='min-h-screen flex flex-col items-center justify-start gap-12'>
        <section className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 w-full h-full min-h-screen'>
          <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
            <FeatureContextProvider>
              <Outlet />
            </FeatureContextProvider>
          </div>
        </section>
      </main>
    </CartContextProvider>
  );
}
