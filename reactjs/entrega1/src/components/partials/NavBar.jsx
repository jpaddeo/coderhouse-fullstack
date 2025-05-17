export default function NavBar() {
  return (
    <nav>
      <ul className='flex items-center justify-center gap-16 list-none'>
        <li>
          <a
            href='/'
            className='hover:border-blue-400 hover:text-blue-400 border-b-2 border-transparent text-gray-700 px-4 py-2 transition-all duration-300'
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href='javascript:void(0)'
            className='flex items-center justify-center gap-2 cursor-not-allowed opacity-70'
          >
            Productos
            <span className='text-sm px-2 py-1 bg-gray-300 rounded-full text-gray-700 font-semibold animate-pulse'>
              próximamente
            </span>
          </a>
        </li>
        <li>
          <a
            href='javascript:void(0)'
            className='flex items-center justify-center gap-2 cursor-not-allowed opacity-70'
          >
            Categorías
            <span className='text-sm px-2 py-1 bg-gray-300 rounded-full text-gray-700 font-semibold animate-pulse'>
              próximamente
            </span>
          </a>
        </li>
        <li>
          <a
            href='javascript:void(0)'
            className='flex items-center justify-center gap-2 cursor-not-allowed opacity-70'
          >
            Contacto
            <span className='text-sm px-2 py-1 bg-gray-300 rounded-full text-gray-700 font-semibold animate-pulse'>
              próximamente
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
