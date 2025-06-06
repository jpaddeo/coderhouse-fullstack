import { Link } from 'react-router';

import { BuildingStorefrontIcon } from '@heroicons/react/24/solid';

export default function Logo() {
  return (
    <Link
      to='/'
      className='flex items-center hover:scale-105 transition-all duration-200 ease-in-out'
    >
      <BuildingStorefrontIcon className='h-6 w-6 text-gray-700 dark:text-white mr-2' />
      <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
        JPA e-commerce
      </span>
    </Link>
  );
}
