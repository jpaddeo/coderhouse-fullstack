import ItemListContainer from '@/components/ItemListContainer';

export default function HomePage() {
  return (
    <div>
      <ItemListContainer items={['Item 1', 'Item 2', 'Item 3']} />
    </div>
  );
}
