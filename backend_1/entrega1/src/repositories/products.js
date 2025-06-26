import path from 'path';
import { readFile, writeFile } from 'fs/promises';

import { createIfNotExistsFile } from '../utils/files.js';

const PRODUCTS_FILEPATH = path.resolve('data', 'products.json');

const productsRepository = {
  add: async (product) => {
    await createIfNotExistsFile(PRODUCTS_FILEPATH);
    const productsFile = await readFile(PRODUCTS_FILEPATH, 'utf8', );
    const products = JSON.parse(productsFile);
    products.push(product);
    await writeFile(PRODUCTS_FILEPATH, JSON.stringify(products, null, 2));
    return products;
  },
  get: async (id) => {
    await createIfNotExistsFile(PRODUCTS_FILEPATH);
    const productsFile = await readFile(PRODUCTS_FILEPATH, 'utf8');
    const products = JSON.parse(productsFile);
    return products.find((product) => product.id === id);
  },
  getAll: async () => {
    await createIfNotExistsFile(PRODUCTS_FILEPATH);
    const productsFile = await readFile(PRODUCTS_FILEPATH, 'utf8');
    return JSON.parse(productsFile);
  },
  update: async (id, updatedProduct) => {
    await createIfNotExistsFile(PRODUCTS_FILEPATH);
    const productsFile = await readFile(PRODUCTS_FILEPATH, 'utf8');
    const products = JSON.parse(productsFile);
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      await writeFile(PRODUCTS_FILEPATH, JSON.stringify(products, null, 2));
      return products[index];
    }
    return null;
  },
  delete: async (id) => {
    await createIfNotExistsFile(PRODUCTS_FILEPATH);
    const productsFile = await readFile(PRODUCTS_FILEPATH, 'utf8');
    const products = JSON.parse(productsFile);
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      const deletedProduct = products.splice(index, 1);
      await writeFile(PRODUCTS_FILEPATH, JSON.stringify(products, null, 2));
      return deletedProduct[0];
    }
    return null;
  },
};

export default productsRepository;
