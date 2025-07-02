import { db } from '@/data/firebase';
import { collection, getDoc, doc, getDocs } from 'firebase/firestore';

export const productsService = {
  getAll: async () => {
    try {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const products = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return products;
    } catch (error) {
      console.error('Error obteniendo los productos:', error);
      throw new Error('Error obteniendo los productos');
    }
  },
  get: async (id) => {
    try {
      const producDocRef = doc(db, 'products', id);
      const productDoc = await getDoc(producDocRef);
      if (productDoc.exists()) {
        return { id: productDoc.id, ...productDoc.data() };
      } else {
        throw new Error('Producto no encontrado');
      }
    } catch (error) {
      console.error('Error obteniendo el producto:', error);
      throw new Error('Error obteniendo el producto');
    }
  },
};
