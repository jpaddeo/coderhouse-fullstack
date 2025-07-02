import { db } from '@/data/firebase';
import { collection, addDoc } from 'firebase/firestore';
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
};
