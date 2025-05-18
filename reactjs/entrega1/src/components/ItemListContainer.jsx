export default function ItemListContainer({ items }) {
  return (
    <dl className='list-none flex flex-col items-center justify-center gap-4'>
      {items.map((it) => (
        <dd className='hover:scale-105 hover:border-dashed border-2 border-transparent px-6 py-3 hover:border-blue-400 hover:text-blue-400 rounded-lg hover:cursor-not-allowed transition-all duration-200 ease-in-out'>{it}</dd>
      ))}
    </dl>
  );
}
