export default function NavBarItem({ title, href, coomingSoon = false }) {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center justify-center gap-2   border-b-2 border-transparent text-gray-700 px-4 py-2 transition-all duration-300 ${
          coomingSoon
            ? 'cursor-not-allowed opacity-70'
            : 'hover:border-blue-400 hover:text-blue-400'
        }`}
      >
        {title}
        {coomingSoon && (
          <span className='text-sm px-2 py-1 bg-blue-200 rounded-full text-gray-700 font-semibold animate-pulse'>
            próximamente
          </span>
        )}
      </a>
    </li>
  );
}
