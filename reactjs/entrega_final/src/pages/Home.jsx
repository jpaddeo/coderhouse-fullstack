import { useState, useEffect } from 'react';

import ProductListItem from '@/components/ProductListItem';
import CategoriesFilter from '@/components/partials/CategoriesFilter';
import FilterOrder from '@/components/FilterOrder';
import ProductListItemSkeleton from '@/components/partials/skeletons/ProductListItemSkeleton';

import { productsService } from '@/services';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [showCategoriesFilter, setShowCategoriesFilter] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fbProducts = await productsService.getAll();
        setProducts(fbProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSortClick = () => {
    const sortedProducts = [...products].sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleShowCategoriesFilter = () => {
    setShowCategoriesFilter(!showCategoriesFilter);
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
      <FilterOrder
        onShowCategoriesFilter={handleShowCategoriesFilter}
        onSortClick={handleSortClick}
      />

      {showCategoriesFilter && (
        <div className='mb-4'>
          <CategoriesFilter />
        </div>
      )}

      <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
        {loading
          ? // Show skeletons when loading
            [...Array(4)].map((_, index) => (
              <ProductListItemSkeleton key={index} />
            ))
          : // Show actual products when loaded
            products.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}
