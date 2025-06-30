export default function ProductItemSkeleton() {
  return (
    <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 py-8'>
      <div className='animate-pulse flex flex-col md:flex-row gap-8'>
        <div className='w-full md:w-1/2 bg-gray-300 h-96 rounded-lg'></div>
        <div className='w-full md:w-1/2'>
          <div className='h-8 bg-gray-300 rounded w-3/4 mb-6'></div>
          <div className='h-4 bg-gray-300 rounded w-full mb-4'></div>
          <div className='h-4 bg-gray-300 rounded w-5/6 mb-4'></div>
          <div className='h-4 bg-gray-300 rounded w-4/6 mb-8'></div>
          <div className='h-10 bg-gray-300 rounded w-1/3 mb-6'></div>
          <div className='h-12 bg-gray-300 rounded w-full mb-4'></div>
        </div>
      </div>
    </div>
  );
}
