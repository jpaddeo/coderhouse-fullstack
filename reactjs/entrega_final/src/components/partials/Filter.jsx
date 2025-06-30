import { ArrowDownIcon, FunnelIcon } from '@heroicons/react/24/solid';

export default function Filter({ onShowCategoriesFilter }) {
  return (
    <button
      data-modal-toggle='filterModal'
      data-modal-target='filterModal'
      type='button'
      className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto'
      onClick={onShowCategoriesFilter}
    >
      <FunnelIcon className='-ms-0.5 me-2 h-4 w-4' />
      Mostrar categorías
      <ArrowDownIcon className='-me-0.5 ms-2 h-4 w-4' />
    </button>
  );
}
