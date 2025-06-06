import { useParams } from 'react-router';

export default function ProductItemPage() {
  const { producto } = useParams();

  console.log('Producto:', producto);

  return <div className='bg-white'></div>;
}
