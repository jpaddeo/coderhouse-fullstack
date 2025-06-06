import { Navigate, useParams } from 'react-router';

import { categories, products } from '@/data/mocks';
import ProductListItem from '@/components/ProductListItem';

const isValidCategory = (category) => {
  return (
    category && categories.some((cat) => cat.slug === category.toLowerCase())
  );
};

export default function CategoriesPage() {
  const { categoria } = useParams();

  if (categoria && !isValidCategory(categoria)) {
    return <Navigate to='/404' replace />;
  }

  const categoryProducts = categoria
    ? products.filter((product) => product.categories.includes(categoria))
    : products;

  return (
    <section className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 w-full h-screen'>
      <h1 className='text-center text-2xl font-bold text-gray-900 dark:text-white mb-4'>
        {categoria ? `Categoría: ${categoria}` : 'Todas las categorías'}
      </h1>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        {categoryProducts.length === 0 ? (
          <h2>No hay productos para esta categoría</h2>
        ) : (
          <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            {categoryProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
