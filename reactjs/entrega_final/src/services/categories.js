import { db } from '@/data/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const categoriesService = {
  getAll: async () => {
    try {
      const categoriesCollection = collection(db, 'categories');
      const categoriesSnapshot = await getDocs(categoriesCollection);
      const categories = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return categories;
    } catch (error) {
      console.error('Error obteniendo categorías:', error);
      throw new Error('Error obteniendo las categorías');
    }
  },
  getProductsByCategory: async (categorySlug) => {
    try {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const products = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (!categorySlug) {
        return products;
      }
      return products.filter((product) =>
        product.categories.includes(categorySlug)
      );
    } catch (error) {
      console.error('Error obteniendo productos por categoría:', error);
      throw new Error('Error obteniendo los productos de la categoría');
    }
  },
};
