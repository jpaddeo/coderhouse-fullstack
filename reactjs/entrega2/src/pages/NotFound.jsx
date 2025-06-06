export default function NotFoundPage() {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800'>
        404 - Página no encontrada
      </h1>
      <p className='mt-4 text-lg text-gray-600'>
        Lo sentimos, la página que buscas no existe.
      </p>
    </div>
  );
}
