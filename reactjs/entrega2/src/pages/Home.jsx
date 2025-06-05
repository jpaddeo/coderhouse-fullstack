import { products } from '@/data/mocks';

import ProductListItem from '@/components/ProductListItem';

export default function HomePage() {
  return (
    <section className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 w-full h-screen'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <div className='mb-4 items-end justify-between space-y-4 sm:flex sm:flex-row-reverse sm:space-y-0 md:mb-8'>
          <div className='flex items-center space-x-4'>
            <button
              data-modal-toggle='filterModal'
              data-modal-target='filterModal'
              type='button'
              className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto'
            >
              <svg
                className='-ms-0.5 me-2 h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='2'
                  d='M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z'
                />
              </svg>
              Filters
              <svg
                className='-me-0.5 ms-2 h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 9-7 7-7-7'
                />
              </svg>
            </button>
            <button
              type='button'
              className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto'
            >
              <svg
                className='-ms-0.5 me-2 h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4'
                />
              </svg>
              Sort
              <svg
                className='-me-0.5 ms-2 h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 9-7 7-7-7'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
        <div className='w-full text-center'>
          <button
            type='button'
            className='rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}
