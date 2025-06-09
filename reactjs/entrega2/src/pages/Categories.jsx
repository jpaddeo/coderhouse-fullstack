import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router';

import { categories, products, MOCK_TIMEOUT_DELAY } from '@/data/mocks';

import CategoriesFilter from '@/components/partials/CategoriesFilter';
import FilterOrder from '@/components/FilterOrder';
import ProductListItem from '@/components/ProductListItem';
import ProductListItemSkeleton from '@/components/partials/skeletons/ProductListItemSkeleton';

const isValidCategory = (category) => {
  return (
    category && categories.some((cat) => cat.slug === category.toLowerCase())
  );
};

export default function CategoriesPage() {
  const { categoria } = useParams();
  const [sortOrder, setSortOrder] = useState('asc');
  const [showCategoriesFilter, setShowCategoriesFilter] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      categoria && isValidCategory(categoria)
        ? setCategoryProducts(
            products.filter((product) => product.categories.includes(categoria))
          )
        : setCategoryProducts(products);
      setLoading(false);
    }, MOCK_TIMEOUT_DELAY);

    return () => clearTimeout(timer);
  }, [categoria]);

  const handleShowCategoriesFilter = () => {
    setShowCategoriesFilter(!showCategoriesFilter);
  };

  const handleSortClick = () => {
    const sortedProducts = [...categoryProducts].sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setCategoryProducts(sortedProducts);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (categoria && !isValidCategory(categoria)) {
    return <Navigate to='/404' replace />;
  }

  return (
    <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
      <h1 className='text-center text-2xl font-bold text-gray-900 dark:text-white mb-4'>
        {categoria ? `Categoría: ${categoria}` : 'Todas las categorías'}
      </h1>

      <FilterOrder
        onShowCategoriesFilter={handleShowCategoriesFilter}
        onSortClick={handleSortClick}
        showFilter={false}
      />

      {showCategoriesFilter && (
        <div className='mb-4'>
          <CategoriesFilter categoria={categoria} popup={false} />
        </div>
      )}

      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        {loading ? (
          <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            {[...Array(8)].map((_, index) => (
              <ProductListItemSkeleton key={index} />
            ))}
          </div>
        ) : categoryProducts.length === 0 ? (
          <div className='flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
            <h2 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
              No se encontraron productos
            </h2>
            <p className='mb-4 text-gray-500 dark:text-gray-400'>
              No hay productos disponibles en la categoría {categoria}
            </p>
          </div>
        ) : (
          <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            {categoryProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
