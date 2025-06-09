export const MOCK_TIMEOUT_DELAY = 500;

const products = [
  {
    id: '1',
    title: 'Auriculares wireless',
    description:
      'Auriculares wireless de alta calidad con reducción de ruido y hasta 20hs de autonomía',
    price: 150000,
    mainPhoto:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
    ],
    categories: ['electronica', 'deportes'],
  },
  {
    id: '2',
    title: 'Reloj inteligente',
    description: 'Reloj inteligente con control de presión, fitness, etcétera.',
    price: 80000,
    mainPhoto:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80',
      'https://images.unsplash.com/photo-1617043786394-ae6c3c4dbc39?w=800&q=80',
    ],
    categories: ['electronica', 'ropa'],
  },
  {
    id: '3',
    title: 'Parlante bluetooth',
    description: 'Parlante bluetooth con 12 horas de autonomía de batería.',
    price: 60000,
    mainPhoto:
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
      'https://images.unsplash.com/photo-1629868648667-9f41faafcf26?w=800&q=80',
      'https://images.unsplash.com/photo-1561930661-2b2869995688?w=800&q=80',
    ],
    categories: ['electronica', 'deportes'],
  },
  {
    id: '4',
    title: 'Teclado mecánico',
    description: 'Teclado mecánico blanco con luces RGB de bajo telcas.',
    price: 250000,
    mainPhoto:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=800&q=80',
      'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=800&q=80',
    ],
    categories: ['electronica'],
  },
];

const categories = [
  {
    id: '1',
    name: 'Electrónica',
    slug: 'electronica',
    description: 'Últimos gadgets y dispositivos',
    photo:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80',
  },
  {
    id: '2',
    name: 'Decoración',
    slug: 'decoracion',
    description: 'Hogar y estilo de vida',
    photo:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80',
  },
  {
    id: '3',
    name: 'Ropa',
    slug: 'ropa',
    description: 'Ropa y accesorios de moda',
    photo:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80',
  },
  {
    id: '4',
    name: 'Deportes',
    slug: 'deportes',
    description: 'Ropa y accesorios deportivos',
    photo:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80',
  },
  {
    id: '5',
    name: 'Libros',
    slug: 'libros',
    description: 'Literatura y libros de interés general',
    photo:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80',
  },
];

export { products, categories };
