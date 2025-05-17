import { BuildingStorefrontIcon } from '@heroicons/react/24/solid';

export default function Logo() {
  return (
    <a
      href='/'
      className='flex items-center justify-center gap-2 hover:scale-105 transition-all duration-100 ease-in-out'
    >
      <BuildingStorefrontIcon className='w-6 h-6' />
      <span>MiTienda</span>
    </a>
  );
}
