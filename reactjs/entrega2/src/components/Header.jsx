import Logo from './partials/Logo';
import Menu from './partials/Menu';

export default function Header() {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Logo />
          <Menu />
        </div>
      </nav>
    </header>
  );
}
