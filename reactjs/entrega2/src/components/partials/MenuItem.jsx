import { Link } from 'react-router';

export default function MenuItem({ title, href, coomingSoon = false }) {
  return (
    <li>
      <Link
        to={href}
        className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
          coomingSoon ? 'cursor-not-allowed' : ''
        }`}
      >
        {title}
        {coomingSoon && (
          <span className='text-xs text-gray-700 bg-gray-200 dark:text-white dark:bg-gray-700 px-2 py-1 rounded-md  animate-pulse ml-2'>
            próximamente
          </span>
        )}
      </Link>
    </li>
  );
}
