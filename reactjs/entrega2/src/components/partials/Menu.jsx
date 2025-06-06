import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

import CartWidget from '@/components/partials/CartWidget';
import MenuItem from '@/components/partials/MenuItem';

const MENU = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Categorías',
    href: '/categorias',
  },
  {
    title: 'Contacto',
    href: 'javascript:void(0)',
    coomingSoon: true,
  },
];

export default function Menu() {
  const [hideMenu, setHideMenu] = useState(true);

  const handleMenuToggle = () => {
    setHideMenu(!hideMenu);
  };
  return (
    <>
      <div className='flex items-center lg:order-2'>
        <CartWidget />
        <button
          type='button'
          className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          onClick={handleMenuToggle}
        >
          <span className='sr-only'>Menu</span>
          <Bars3Icon className='w-6 h-6' />
        </button>
      </div>
      <div
        className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
          hideMenu ? 'hidden' : ''
        }`}
      >
        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
          {MENU.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
