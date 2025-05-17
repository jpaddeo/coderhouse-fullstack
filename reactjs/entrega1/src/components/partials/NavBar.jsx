import NavBarItem from '@/components/partials/NavBarItem';

export default function NavBar() {
  const navBaItems = [
    {
      title: 'Inicio',
      href: '/',
    },
    {
      title: 'Productos',
      href: 'javascript:void(0)',
      coomingSoon: true,
    },
    {
      title: 'Categorías',
      href: 'javascript:void(0)',
      coomingSoon: true,
    },
    {
      title: 'Contacto',
      href: 'javascript:void(0)',
      coomingSoon: true,
    },
  ];

  return (
    <nav>
      <ul className='flex items-center justify-center gap-16 list-none'>
        {navBaItems.map((item, index) => (
          <NavBarItem
            key={index}
            title={item.title}
            href={item.href}
            coomingSoon={item.coomingSoon || false}
          />
        ))}
      </ul>
    </nav>
  );
}
