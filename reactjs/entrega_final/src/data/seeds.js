import { collection, addDoc } from 'firebase/firestore';

import { db } from '@/data/firebase.js';
import { categories, products } from '@/data/mocks';

const seedCategories = async () => {
  try {
    const categoriesCollection = collection(db, 'categories');
    for (const category of categories) {
      const { id: _, ...categoryData } = category;
      await addDoc(categoriesCollection, categoryData);
      console.log(`La categoría ${category.name} se agregó correctamente.`);
    }
  } catch (error) {
    console.error('Error agregando categorías: ', error);
    throw new Error(error);
  }
};

const seedProducts = async () => {
  try {
    const productsCollection = collection(db, 'products');
    for (const product of products) {
      const { id: _, ...productData } = product;
      await addDoc(productsCollection, productData);
      console.log(`El producto ${product.title} se agregó correctamente.`);
    }
  } catch (error) {
    console.error('Error agregando productos: ', error);
    throw new Error(error);
  }
};

export const seedDatabase = async () => {
  await seedCategories();
  await seedProducts();
};
