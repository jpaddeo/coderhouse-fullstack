export default function ProductListItemSkeleton() {
  return (
    <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
      {/* Product Image placeholder */}
      <div className='h-56 w-full'>
        <div className='animate-pulse h-full w-full bg-gray-300 rounded-md' />
      </div>

      <div className='pt-6'>
        <div className='mb-4 flex items-center justify-end gap-4'></div>

        {/* Product Title placeholder */}
        <div className='animate-pulse h-6 bg-gray-300 rounded w-3/4 mb-4'></div>

        <div className='mt-4 flex flex-col items-start justify-between gap-4'>
          {/* Price placeholder */}
          <div className='animate-pulse h-8 bg-gray-300 rounded w-1/3 mb-2'></div>

          {/* Buttons placeholder */}
          <div className='flex items-center justify-between gap-2 w-full border-t border-gray-400 pt-4 mt-2'>
            <div className='animate-pulse h-10 w-10 bg-gray-300 rounded-lg'></div>
            <div className='animate-pulse h-10 bg-gray-300 rounded-lg w-2/3'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
