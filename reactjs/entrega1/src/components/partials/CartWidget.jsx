  import { ShoppingBagIcon } from '@heroicons/react/24/solid';

export default function CartWidget() {
  return (
    <div className='p-8 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>
      <ShoppingBagIcon className='h-8 w-8 text-gray-700 hover:text-blue-400' />
    </div>
  );
}
