import { useCallback } from 'react';
import { Link } from 'react-router';
import {
  PlusIcon,
  MinusIcon,
  TrashIcon,
  ShoppingCartIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';

import { useCart } from '@/contexts/cart';

const EmptyCart = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 py-8'>
      <div className='flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <ShoppingCartIcon className='w-16 h-16 text-gray-400 mb-4' />
        <h2 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
          Tu carrito está vacío
        </h2>
        <p className='mb-6 text-gray-500 dark:text-gray-400'>
          No tienes productos en tu carrito de compras
        </p>
        <Link
          to='/'
          className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          <ArrowLeftIcon className='w-5 h-5 mr-2' />
          Explorar productos
        </Link>
      </div>
    </div>
  );
};

export default function CartPage() {
  const {
    items,
    increaseItem,
    decreaseItem,
    deleteItem,
    clearItems,
    totalItems,
    totalProducts,
    totalPrice,
    itemQuantity,
  } = useCart();

  const handleIncrementar = useCallback(
    (product) => {
      if (itemQuantity(product) + 1 > product.stock) {
        alert(
          'No hay suficiente stock para aumentar la cantidad de este producto.'
        );
        return;
      }
      increaseItem(product);
    },
    [increaseItem, itemQuantity]
  );

  const handleDecrementar = useCallback(
    (product) => {
      decreaseItem(product);
    },
    [decreaseItem]
  );

  const handleEliminar = useCallback(
    (product) => {
      deleteItem(product);
    },
    [deleteItem]
  );

  const handleVaciar = useCallback(() => {
    clearItems();
  }, [clearItems]);

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 py-8'>
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
        Tu Carrito de Compras ({totalItems}{' '}
        {totalItems === 1 ? 'producto' : 'productos'})
      </h1>

      <div className='flex flex-col md:flex-row gap-6'>
        {/* Cart Items */}
        <div className='w-full md:w-2/3'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow'>
            <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
              {items.map((item) => (
                <li key={item.id} className='p-4 sm:p-6'>
                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                      <img
                        src={item.mainPhoto}
                        alt={item.title}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>

                    <div className='flex flex-1 flex-col'>
                      <div className='flex justify-between'>
                        <Link
                          to={`/productos/${item.id}`}
                          className='text-lg font-medium text-gray-900 dark:text-white hover:underline'
                        >
                          {item.title}
                        </Link>
                      </div>

                      <p className='mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2'>
                        {item.description}
                      </p>

                      <div className='mt-2 flex items-end justify-between'>
                        <p className='text-lg font-medium text-gray-900 dark:text-white'>
                          {item.price.toLocaleString('es-AR', {
                            style: 'currency',
                            currency: 'ARS',
                          })}
                        </p>

                        <div className='flex items-center gap-4'>
                          <div className='flex items-center border border-gray-300 rounded-lg'>
                            <button
                              onClick={() => handleDecrementar(item)}
                              className='p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-l-lg'
                            >
                              <MinusIcon className='h-4 w-4' />
                            </button>
                            <span className='px-4 py-2 text-gray-900 dark:text-white'>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrementar(item)}
                              className='p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-r-lg'
                            >
                              <PlusIcon className='h-4 w-4' />
                            </button>
                          </div>
                          <button
                            onClick={() => handleEliminar(item)}
                            className='p-2 text-red-500 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300 rounded-lg'
                            title='Eliminar producto'
                          >
                            <TrashIcon className='h-5 w-5' />
                          </button>
                        </div>
                      </div>

                      <p className='mt-2 text-sm text-right text-gray-700 dark:text-gray-300'>
                        Subtotal:{' '}
                        {(item.price * item.quantity).toLocaleString('es-AR', {
                          style: 'currency',
                          currency: 'ARS',
                        })}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700'>
              <button
                onClick={handleVaciar}
                className='inline-flex items-center text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300'
              >
                <TrashIcon className='h-4 w-4 mr-1' /> Vaciar carrito
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className='w-full md:w-1/3'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-20'>
            <h2 className='text-lg font-medium text-gray-900 dark:text-white mb-4'>
              Resumen del pedido
            </h2>
            <dl className='space-y-2'>
              <div className='flex justify-between'>
                <dt className='text-sm text-gray-600 dark:text-gray-400'>
                  Productos diferentes
                </dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>
                  {totalProducts}
                </dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-sm text-gray-600 dark:text-gray-400'>
                  Cantidad total de items
                </dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>
                  {totalItems}
                </dd>
              </div>
              <div className='border-t border-gray-200 dark:border-gray-700 pt-2 mt-2'>
                <div className='flex justify-between'>
                  <dt className='text-base font-medium text-gray-900 dark:text-white'>
                    Total
                  </dt>
                  <dd className='text-base font-medium text-gray-900 dark:text-white'>
                    {totalPrice.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                    })}
                  </dd>
                </div>
              </div>
            </dl>
            <div className='mt-6'>
              <button
                type='button'
                className='w-full flex justify-center items-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Finalizar compra
              </button>
              <Link
                to='/'
                className='mt-3 w-full flex justify-center items-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-800'
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
