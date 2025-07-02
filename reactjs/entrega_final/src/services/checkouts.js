import { db } from '@/data/firebase';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { productsService } from './product';

export const checkoutsService = {
  new: async (cartData) => {
    try {
      const checkoutsCollection = collection(db, 'checkouts');
      const checkoutRef = await addDoc(checkoutsCollection, cartData);
      for (const product of cartData.products) {
        await productsService.update(product.id, {
          stock: Number(product.stock - product.quantity),
        });
      }
      return checkoutRef.id;
    } catch (error) {
      console.error('Error checkouteando carrito:', error);
      throw new Error('Error checkouteando carrito');
    }
  },
  get: async (id) => {
    try {
      const checkoutRef = doc(db, 'checkouts', id);
      const checkoutDoc = await getDoc(checkoutRef);
      if (checkoutDoc.exists()) {
        return checkoutDoc.data();
      } else {
        throw new Error('Compra no encontrada');
      }
    } catch (error) {
      console.error('Error obteniendo la compra:', error);
      throw new Error('Error obteniendo la compra');
    }
  },
};
