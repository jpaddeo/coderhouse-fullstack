import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function CartWidget() {
  return (
    <div className='p-8 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-100 ease-in-out'>
      <ShoppingCartIcon className='h-6 w-6 text-gray-700' />
    </div>
  );
}
