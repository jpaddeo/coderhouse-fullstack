import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

import ProductItemSkeleton from '@/components/partials/skeletons/ProductItemSkeleton';
import { productsService } from '@/services/index';

export default function ProductItemPage() {
  const { producto } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async (productoId) => {
      try {
        setLoading(true);
        const fbProduct = await productsService.get(productoId);
        setProduct(fbProduct);
      } catch (error) {
        console.error(error);
        navigate.to('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };
    fetchProduct(producto);
  }, [producto, navigate]);

  if (loading) {
    return <ProductItemSkeleton />;
  }

  return (
    <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 py-8'>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='w-full md:w-1/2'>
          <div className='mb-4 h-96 overflow-hidden rounded-lg bg-gray-100'>
            <img
              src={selectedImage}
              alt={product.title}
              className='h-full w-full object-contain'
            />
          </div>
          <div className='flex gap-2 overflow-auto pb-2'>
            <button
              onClick={() => setSelectedImage(product.mainPhoto)}
              className={`min-w-20 h-20 rounded-md border-2 ${
                selectedImage === product.mainPhoto
                  ? 'border-blue-600'
                  : 'border-gray-200'
              } overflow-hidden`}
            >
              <img
                src={product.mainPhoto}
                alt={`${product.title} thumbnail`}
                className='h-full w-full object-cover'
              />
            </button>
            {product.photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(photo)}
                className={`min-w-20 h-20 rounded-md border-2 ${
                  selectedImage === photo
                    ? 'border-blue-600'
                    : 'border-gray-200'
                } overflow-hidden cursor-pointer`}
              >
                <img
                  src={photo}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  className='h-full w-full object-cover'
                />
              </button>
            ))}
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <h1 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
            {product.title}
          </h1>
          <p className='mb-6 text-gray-700 dark:text-gray-300'>
            {product.description}
          </p>

          <div className='mb-6'>
            <p className='text-3xl font-extrabold text-gray-900 dark:text-white'>
              {product.price.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
            </p>
          </div>

          <div className='mb-6'>
            <h3 className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Categorías:
            </h3>
            <div className='flex flex-wrap gap-2'>
              {product.categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/categorias/${category}`}
                  className='no-underline'
                >
                  <span className='inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
                    {category}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className='mt-8 flex items-center justify-between gap-4'>
            <button
              type='button'
              className='rounded-lg p-3 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-not-allowed opacity-50'
              disabled
            >
              <span className='sr-only'>Agregar a favoritos</span>
              <HeartIcon className='h-6 w-6 text-gray-700 dark:text-white' />
            </button>

            <button
              type='button'
              className='flex-1 inline-flex justify-center items-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-not-allowed opacity-50'
              disabled
            >
              <ShoppingBagIcon className='mr-2 h-5 w-5' />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
