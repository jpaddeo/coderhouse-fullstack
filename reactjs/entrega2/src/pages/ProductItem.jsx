import { useParams } from 'react-router';

export default function ProductItemPage() {
  const { producto } = useParams();

  return <div className='bg-white'>{producto.title}</div>;
}
