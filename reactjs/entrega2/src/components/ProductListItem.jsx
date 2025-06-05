import { Link } from 'react-router';

import { HeartIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function ProductListItem({ product }) {
  return (
    <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
      <div className='h-56 w-full'>
        <Link to={`productos/${product.id}`}>
          <img
            className='mx-auto h-full rounded-md'
            src={product.mainPhoto}
            alt={product.title}
          />
        </Link>
      </div>
      <div className='pt-6'>
        <div className='mb-4 flex items-center justify-end gap-4'></div>

        <Link
          to={`productos/${product.id}`}
          className='text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white'
        >
          {product.title}
        </Link>

        <div className='mt-4 flex flex-col items-start justify-between gap-4'>
          <p className='text-2xl font-extrabold leading-tight text-gray-900 dark:text-white'>
            {product.price.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
            })}
          </p>
          <div className='flex items-center justify-between gap-2 w-full border-t border-gray-400 pt-4 mt-2'>
            <button
              type='button'
              className='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <span className='sr-only'> Agregar a favoritos </span>
              <HeartIcon className='h-6 w-6' />
            </button>
            <button
              type='button'
              className='inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <ShoppingBagIcon className='mr-2 h-5 w-5' />
              <span className='sr-only'>Agregar al carrito</span>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
