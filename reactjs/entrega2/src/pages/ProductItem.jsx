import { useParams } from 'react-router';

export default function ProductItemPage() {
  const { producto } = useParams();

  console.log('Producto:', producto);

  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
          >
            <li>
              <div className='flex items-center'>
                <a href='#' className='mr-2 text-sm font-medium text-gray-900'>
                  Men
                </a>
                <svg
                  width='16'
                  height='20'
                  viewBox='0 0 16 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='h-5 w-4 text-gray-300'
                >
                  <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                </svg>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <a href='#' className='mr-2 text-sm font-medium text-gray-900'>
                  Clothing
                </a>
                <svg
                  width='16'
                  height='20'
                  viewBox='0 0 16 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='h-5 w-4 text-gray-300'
                >
                  <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                </svg>
              </div>
            </li>

            <li className='text-sm'>
              <a
                href='#'
                aria-current='page'
                className='font-medium text-gray-500 hover:text-gray-600'
              >
                Basic Tee 6-Pack
              </a>
            </li>
          </ol>
        </nav>

        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <img
            src='https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
            alt='Two each of gray, white, and black shirts laying flat.'
            className='hidden size-full rounded-lg object-cover lg:block'
          />
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <img
              src='https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
              alt='Model wearing plain black basic tee.'
              className='aspect-3/2 w-full rounded-lg object-cover'
            />
            <img
              src='https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg'
              alt='Model wearing plain gray basic tee.'
              className='aspect-3/2 w-full rounded-lg object-cover'
            />
          </div>
          <img
            src='https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
            alt='Model wearing plain white basic tee.'
            className='aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto'
          />
        </div>

        <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              Basic Tee 6-Pack
            </h1>
          </div>

          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>$192</p>

            <form className='mt-10'>
              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-medium text-gray-900'>Size</h3>
                  <a
                    href='#'
                    className='text-sm font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Size guide
                  </a>
                </div>
                <fieldset aria-label='Choose a size' className='mt-4'>
                  <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                    <label className='group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium text-gray-200 uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        type='radio'
                        name='size-choice'
                        value='XXS'
                        disabled
                        className='sr-only'
                      />
                      <span>XXS</span>
                      <span
                        aria-hidden='true'
                        className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
                      >
                        <svg
                          className='absolute inset-0 size-full stroke-2 text-gray-200'
                          viewBox='0 0 100 100'
                          preserveAspectRatio='none'
                          stroke='currentColor'
                        >
                          <line
                            x1='0'
                            y1='100'
                            x2='100'
                            y2='0'
                            vector-effect='non-scaling-stroke'
                          />
                        </svg>
                      </span>
                    </label>
                    <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        type='radio'
                        name='size-choice'
                        value='XS'
                        className='sr-only'
                      />
                      <span>XS</span>
                      <span
                        className='pointer-events-none absolute -inset-px rounded-md'
                        aria-hidden='true'
                      ></span>
                    </label>
                    <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        type='radio'
                        name='size-choice'
                        value='S'
                        className='sr-only'
                      />
                      <span>S</span>
                      <span
                        className='pointer-events-none absolute -inset-px rounded-md'
                        aria-hidden='true'
                      ></span>
                    </label>
                    <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        type='radio'
                        name='size-choice'
                        value='M'
                        className='sr-only'
                      />
                      <span>M</span>
                      <span
                        className='pointer-events-none absolute -inset-px rounded-md'
                        aria-hidden='true'
                      ></span>
                    </label>
                    <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        type='radio'
                        name='size-choice'
                        value='L'
                        className='sr-only'
                      />
                      <span>L</span>
                      <span
                        className='pointer-events-none absolute -inset-px rounded-md'
                        aria-hidden='true'
                      ></span>
                    </label>
                    <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        type='radio'
                        name='size-choice'
                        value='XL'
                        className='sr-only'
                      />
                      <span>XL</span>
                      <span
                        className='pointer-events-none absolute -inset-px rounded-md'
                        aria-hidden='true'
                      ></span>
                    </label>
                    <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        type='radio'
                        name='size-choice'
                        value='2XL'
                        className='sr-only'
                      />
                      <span>2XL</span>
                      <span
                        className='pointer-events-none absolute -inset-px rounded-md'
                        aria-hidden='true'
                      ></span>
                    </label>
                    <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        type='radio'
                        name='size-choice'
                        value='3XL'
                        className='sr-only'
                      />
                      <span>3XL</span>
                      <span
                        className='pointer-events-none absolute -inset-px rounded-md'
                        aria-hidden='true'
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden'
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16'>
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: &quot;Black&quot;. Need to add an extra
                  pop of color to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

              <div className='mt-4'>
                <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
                  <li className='text-gray-400'>
                    <span className='text-gray-600'>Hand cut and sewn locally</span>
                  </li>
                  <li className='text-gray-400'>
                    <span className='text-gray-600'>
                      Dyed with our proprietary colors
                    </span>
                  </li>
                  <li className='text-gray-400'>
                    <span className='text-gray-600'>
                      Pre-washed &amp; pre-shrunk
                    </span>
                  </li>
                  <li className='text-gray-400'>
                    <span className='text-gray-600'>Ultra-soft 100% cotton</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-sm font-medium text-gray-900'>Details</h2>

              <div className='mt-4 space-y-6'>
                <p className='text-sm text-gray-600'>
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming
                  &quot;Charcoal Gray&quot; limited release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
