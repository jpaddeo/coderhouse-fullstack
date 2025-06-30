import Logo from '@/components/partials/Logo';
import Menu from '@/components/partials/Menu';
import CartWidget from './partials/CartWidget';

export default function Header() {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 flex items-center justify-between w-full mx-auto'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-6 px-3'>
          <Logo />
          <Menu />
        </div>
        <CartWidget />
      </nav>
    </header>
  );
}
