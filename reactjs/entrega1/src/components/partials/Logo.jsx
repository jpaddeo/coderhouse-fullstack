import { BuildingStorefrontIcon } from '@heroicons/react/24/solid';

export default function Logo() {
  return (
    <a
      href='/'
      className='flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 ease-in-out hover:text-blue-400'
    >
      <BuildingStorefrontIcon className='w-8 h-8' />
      <span>CreaTuLanding+Addeo</span>
    </a>
  );
}
