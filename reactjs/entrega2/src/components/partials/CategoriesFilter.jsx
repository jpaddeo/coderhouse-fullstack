import { Link } from 'react-router';

import { XCircleIcon } from '@heroicons/react/24/solid';

import { categories } from '@/data/mocks';

export default function CategoriesFilter({ categoria, popup = true }) {
  return (
    <div class='relative rounded-lg bg-white shadow dark:bg-gray-800 p-6'>
      {popup && (
        <div class='flex items-start justify-between rounded-t p-2'>
          <button
            type='button'
            class='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
            data-modal-toggle='filterModal'
          >
            <XCircleIcon className='h-6 w-6 text-gray-500' />
            <span class='sr-only'>Cerrar modal</span>
          </button>
        </div>
      )}
      <div class='px-4 md:px-5'>
        <ul class='grid grid-cols-2 gap-4'>
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/categorias/${cat.slug}`}>
              <li
                className={`${
                  cat.slug === categoria
                    ? 'border-2 border-dashed border-green-200'
                    : ''
                }`}
              >
                <span className='inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500 md:p-5'>
                  <div className='block'>
                    <div className='w-full text-lg font-semibold'>
                      {cat.name}
                    </div>
                    <div className='w-full'>{cat.description}</div>
                  </div>
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
