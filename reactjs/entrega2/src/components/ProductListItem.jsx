export default function ProductListItem() {
  return (
    <div className='group relative'>
      <img
        src='https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg'
        alt='Front of men&#039;s Basic Tee in black.'
        className='aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80'
      />
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <a href='#'>
              <span aria-hidden='true' className='absolute inset-0'></span>
              Basic Tee
            </a>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>Black</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>$35</p>
      </div>
    </div>
  );
}
