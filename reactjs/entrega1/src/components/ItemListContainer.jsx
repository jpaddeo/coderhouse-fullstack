export default function ItemListContainer({ items }) {
  return (
    <dl className='list-none flex flex-col items-center justify-center gap-4'>
      {items.map((it) => (
        <dd>{it}</dd>
      ))}
    </dl>
  );
}
