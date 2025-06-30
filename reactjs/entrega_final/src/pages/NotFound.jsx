import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
      <div className='flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <h2 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
          No se encontró la página que buscas
        </h2>
        <Link
          to='/'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
