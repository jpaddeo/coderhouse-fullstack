import Logo from '@/components/partials/Logo';
import NavBar from '@/components/partials/NavBar';
import CartWidget from '@/components/partials/CartWidget';

export default function Header() {
  return (
    <header className='bg-white shadow-md w-full flex items-center justify-between px-8 py-4 sticky top-0 z-10 mx-auto'>
      <Logo />
      <NavBar />
      <CartWidget />
    </header>
  );
}
