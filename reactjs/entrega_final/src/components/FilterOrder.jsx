import Filter from '@/components/partials/Filter';
import Order from '@/components/partials/Order';

export default function FilterOrder({
  onShowCategoriesFilter,
  onSortClick,
  showFilter = true,
  showOrder = true,
}) {
  return (
    <div className='mb-4 items-end justify-between space-y-4 sm:flex sm:flex-row-reverse sm:space-y-0 md:mb-8'>
      <div className='flex items-center space-x-4'>
        {showFilter && (
          <Filter onShowCategoriesFilter={onShowCategoriesFilter} />
        )}
        {showOrder && <Order onSortClick={onSortClick} />}
      </div>
    </div>
  );
}
