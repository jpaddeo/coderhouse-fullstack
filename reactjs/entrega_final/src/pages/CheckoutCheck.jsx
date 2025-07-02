import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
      <h1 className='text-2xl font-bold mb-4'>Order Summary</h1>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-xl font-semibold mb-4'>Checkout Details</h2>
        <p className='mb-2'>
          <strong>Compra ID #:</strong> {id}
        </p>
        <p className='mb-2'>
          <strong>Total de Productos:</strong> ${checkout.totalProducts}
        </p>
        <p className='mb-2'>
          <strong>Total de Items:</strong> ${checkout.totalItems}
        </p>
        <p className='mb-2'>
          <strong>Total:</strong> ${checkout.totalPrice.toFixed(2)}
        </p>
        <h3 className='text-lg font-semibold mt-6 mb-2'>Productos</h3>
        <ul className='list-disc pl-5'>
          {checkout.products.map((product) => (
            <li key={product.id} className='mb-2'>
              <span className='font-medium'>{product.title}</span> - $
              {product.price.toFixed(2)} x {product.quantity}
            </li>
          ))}
        </ul>
        <h3 className='text-lg font-semibold mt-6 mb-2'>Detalles</h3>
        <p className='mb-2'>
          <strong>Nombre:</strong> {checkout.client.nombre}
        </p>
        <h3 className='text-lg font-semibold mt-6 mb-2'>Detalle del Pago</h3>
        <p className='mb-2'>
          <strong>Método: Tarjeta de Crédito</strong>
        </p>
        <p className='mb-2'>
          <strong>Número de tarjeta:</strong> **** **** ****{' '}
          {checkout.client.numeroTarjeta.slice(-4)}
        </p>
        <p className='mb-2'>
          <strong>Fecha Expiración:</strong> {checkout.client.expiracion}
        </p>
      </div>
    </div>
  );
}
