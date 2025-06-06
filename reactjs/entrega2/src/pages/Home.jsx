import { useState } from 'react';

import { products as initialProducts } from '@/data/mocks';

import ProductListItem from '@/components/ProductListItem';
import {
  ArrowDownIcon,
  ArrowsUpDownIcon,
  FunnelIcon,
} from '@heroicons/react/24/solid';
import CategoriesFilter from '../components/partials/CategoriesFilter';

export default function HomePage() {
  const [products, setProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState('asc');
  const [showCategoriesFilter, setShowCategoriesFilter] = useState(false);

  const handleSortClick = () => {
    const sortedProducts = [...products].sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleShowCategoriesFilter = () => {
    setShowCategoriesFilter(!showCategoriesFilter);
  };

  return (
    <section className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 w-full h-screen'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <div className='mb-4 items-end justify-between space-y-4 sm:flex sm:flex-row-reverse sm:space-y-0 md:mb-8'>
          <div className='flex items-center space-x-4'>
            <button
              data-modal-toggle='filterModal'
              data-modal-target='filterModal'
              type='button'
              className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto'
              onClick={handleShowCategoriesFilter}
            >
              <FunnelIcon className='-ms-0.5 me-2 h-4 w-4' />
              Mostrar categorías
              <ArrowDownIcon className='-me-0.5 ms-2 h-4 w-4' />
            </button>
            <button
              type='button'
              className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto'
              onClick={handleSortClick}
            >
              <ArrowsUpDownIcon className='-ms-0.5 me-2 h-4 w-4' />
              Ordenar
            </button>
          </div>
        </div>

        {showCategoriesFilter && (
          <div className='mb-4'>
            <CategoriesFilter />
          </div>
        )}
        <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
