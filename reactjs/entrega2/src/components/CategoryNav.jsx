import { Link } from 'react-router';

import { categories } from '@/data/mocks';

export default function CategoryNav({ categoria }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            to={`/categorias/${category.slug}`}
            className='text-blue-500 hover:underline'
            aria-disabled={categoria === category.slug}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
