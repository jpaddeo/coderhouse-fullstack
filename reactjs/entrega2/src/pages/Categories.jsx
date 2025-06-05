import { Navigate, useParams } from 'react-router';

import { categories, products } from '@/data/mocks';
import CategoryNav from '@/components/CategoryNav';
import ProductListItem from '@/components/ProductListItem';

const isValidCategory = (category) => {
  return categories.some((cat) => cat.slug === category.toLowerCase());
};

export default function CategoriesPage() {
  const { categoria } = useParams();

  console.log('Categoría:', categoria);
  console.log('Categoría válida:', isValidCategory(categoria));

  if (!isValidCategory(categoria)) {
    return <Navigate to='/404' replace />;
  }

  const categoryProducts = products.filter((product) =>
    product.categories.includes(categoria)
  );

  return (
    <div className='flex items-center justify-center flex-col'>
      <CategoryNav />
      {categoryProducts.length === 0 ? (
        <h2>No hay productos para esta categoría</h2>
      ) : (
        <div className='bg-white'>
          <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
              Productos de la categoría: {categoria}
            </h2>
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {categoryProducts.map((product) => (
                <ProductListItem key={product.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
