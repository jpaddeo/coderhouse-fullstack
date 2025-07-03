import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

export default function CheckoutCheckPage() {
  const { id } = useParams();
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {
    const fetchCheckout = async () => {
      try {
        const { checkoutsService } = await import('@/services/checkouts');
        const checkoutData = await checkoutsService.get(id);
        setCheckout(checkoutData);
      } catch (error) {
        console.error('Error fetching checkout:', error);
      }
    };
    fetchCheckout();
  }, [id]);

  if (!checkout) return null;

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='text-center text-2xl font-bold text-gray-900 dark:text-white mb-4'>
        Resumen de Compra
      </h1>
      <div className='flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white'>
        <p className='mb-2'>
          <strong className='text-lg font-semibold mt-6 mb-2'>Compra ID #:</strong> {id}
        </p>
        <h3 className='text-lg font-semibold mt-6 mb-2'>Cliente</h3>
        <p className='mb-2'>
          <strong>Nombre:</strong> {checkout.client.nombre}
        </p>
        <p className='mb-2'>
          <strong>Método:</strong> Tarjeta de Crédito
        </p>
        <p className='mb-2'>
          <strong>Número de tarjeta:</strong> **** **** ****{' '}
          {checkout.client.numeroTarjeta.slice(-4)}
        </p>
        <p className='mb-2'>
          <strong>Fecha Expiración:</strong> {checkout.client.expiracion}
        </p>
        <h3 className='text-lg font-semibold mt-6 mb-2'>Productos</h3>
        <ul className='list-disc pl-5 mb-2'>
          {checkout.products.map((product) => (
            <li key={product.id} className='mb-2'>
              <span className='font-medium'>{product.title}</span> - $
              {product.price.toFixed(2)} x {product.quantity}
            </li>
          ))}
        </ul>
        <p className='mb-2'>
          <strong>Total de Productos:</strong> {checkout.totalProducts}
        </p>
        <p className='mb-2'>
          <strong>Total de Items:</strong> {checkout.totalItems}
        </p>
        <p className='mb-2'>
          <strong>Total:</strong> ${checkout.totalPrice.toFixed(2)}
        </p>
      </div>
      <Link
        to='/'
        className='mt-3 w-full flex justify-center items-center  px-5 py-3 text-base font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:text-white dark:focus:ring-blue-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg'
      >
        Volver
      </Link>      
    </div>
  );
}
