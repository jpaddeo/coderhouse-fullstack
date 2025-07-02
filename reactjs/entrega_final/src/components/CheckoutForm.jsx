import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { validateCheckoutForm } from '@/utils/form';
import { checkoutsService } from '@/services/checkouts';
import { useCart } from '@/contexts/cart';

export default function CheckoutForm() {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [nombre, setNombre] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiracion, setExpiracion] = useState('');
  const [loading, setLoading] = useState(false);
  const { items, clearItems, totalItems, totalProducts, totalPrice } =
    useCart();
  const navigate = useNavigate();

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeNumeroTarjeta = (event) => {
    setNumeroTarjeta(event.target.value);
  };

  const handleChangeCvc = (event) => {
    setCvc(event.target.value);
  };

  const handleChangeExpiracion = (event) => {
    setExpiracion(event.target.value);
  };

  const handleCheckout = useCallback(async () => {
    const validationRes = validateCheckoutForm({
      nombre,
      numeroTarjeta,
      expiracion,
      cvc,
    });

    if (!validationRes.isValid) {
      alert(validationRes.message);
      return;
    }

    if (totalItems === 0) {
      alert('Tu carrito está vacío. Agrega productos antes de continuar.');
      return;
    }
    setLoading(true);
    try {
      const checkoutId = await checkoutsService.new({
        client: {
          nombre,
          numeroTarjeta,
          expiracion,
          cvc,
        },
        products: items.map((item) => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          stock: item.stock,
          photo: item.mainPhoto,
        })),
        totalProducts,
        totalItems,
        totalPrice,
      });
      alert(`Su compra se realizó con éxito. ID de compra: ${checkoutId}`);
      clearItems();
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error al procesar el checkout:', error);
      alert(
        'Ocurrió un error al procesar tu compra. Por favor, intenta nuevamente más tarde.'
      );
    } finally {
      setLoading(false);
    }
  }, [
    totalItems,
    cvc,
    nombre,
    numeroTarjeta,
    expiracion,
    clearItems,
    totalProducts,
    totalPrice,
    items,
    navigate,
  ]);

  return (
    <form
      action='#'
      className='w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8 mt-4'
    >
      <div className='mb-6 grid grid-cols-2 gap-4'>
        <div className='col-span-2 sm:col-span-1'>
          <label
            for='nombre'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Nombre completo*
          </label>
          <input
            id='nombre'
            type='text'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
            placeholder='Juan Pérez'
            onChange={handleChangeNombre}
            value={nombre}
            required
          />
        </div>

        <div className='col-span-2 sm:col-span-1'>
          <label
            for='numero-tarjeta'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Número de tarjeta*
          </label>
          <input
            type='number'
            id='numero-tarjeta'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
            placeholder='xxxx-xxxx-xxxx-xxxx'
            onChange={handleChangeNumeroTarjeta}
            value={numeroTarjeta}
            required
          />
        </div>

        <div>
          <label
            for='expiracion'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Fecha expiración*
          </label>
          <div className='relative'>
            <input
              id='expiracion'
              type='text'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              placeholder='12/23'
              value={expiracion}
              onChange={handleChangeExpiracion}
              required
            />
          </div>
        </div>
        <div>
          <label
            for='cvc'
            className='mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white'
          >
            CVC*{' '}
            <span className='text-xs text-gray-500 dark:text-gray-400'>
              (últ. 3 dígitos del CVC).
            </span>
          </label>
          <input
            id='cvc'
            type='password'
            value={cvc}
            onChange={handleChangeCvc}
            aria-describedby='helper-text-explanation'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
            placeholder='•••'
            required
          />
        </div>
      </div>

      <button
        type='button'
        className='w-full flex justify-center items-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:animate-pulse disabled:cursor-not-allowed'
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? 'Finalizando compra...' : 'Finalizar compra'}
      </button>
      <Link
        to='/'
        className='mt-3 w-full flex justify-center items-center  px-5 py-3 text-base font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:text-white dark:focus:ring-blue-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg'
      >
        Seguir comprando
      </Link>
    </form>
  );
}
