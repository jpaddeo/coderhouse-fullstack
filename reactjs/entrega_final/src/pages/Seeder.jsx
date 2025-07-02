import { useState } from 'react';
import { useNavigate } from 'react-router';

import { CircleStackIcon } from '@heroicons/react/24/outline';

import { seedDatabase } from '@/data/seeds';

export default function SeederPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEjecutarSeeder = async () => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true);
    try {
      await seedDatabase();
      alert('Base de datos poblada con éxito.');
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error al ejecutar el Seeder:', error);
      alert('Ocurrió un error al poblar la base de datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 py-8'>
      <div className='flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <CircleStackIcon className='w-16 h-16 text-gray-400 mb-4' />
        <h2 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
          Acción de Seeder
        </h2>
        <p className='mb-6 text-gray-500 dark:text-gray-400'>
          Si presionas el siguiente botón, se ejecutará el Seeder para poblar la
          base de datos con categorías y productos de ejemplo (tantas veces como
          clicks realices).
        </p>
        <button
          type='button'
          className='flex-1 inline-flex justify-center items-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50 disabled:animate-pulse'
          onClick={handleEjecutarSeeder}
          disabled={loading}
        >
          {loading ? 'Llenando la bd...' : 'Llenar BD'}
        </button>
      </div>
    </div>
  );
}
