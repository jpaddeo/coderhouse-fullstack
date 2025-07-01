import { Link } from 'react-router';

import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import { useCart } from '@/contexts/cart';

export default function CartWidget() {
  const { totalItems } = useCart();
  return (
    <Link to='/cart' className='flex items-center justify-center lg:order-2'>
      <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out relative'>
        {totalItems > 0 && (
          <span className='absolute top-5 left-5 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full'>
            {totalItems}
          </span>
        )}
        <ShoppingBagIcon className='h-8 w-8 text-gray-700 dark:text-white hover:text-blue-400' />
      </div>
    </Link>
  );
}
