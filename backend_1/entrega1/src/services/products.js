import productsRepository from '../repositories/products.js';

const productsService = {
  add: async (product) => {
    return await productsRepository.add(product);
  },
  get: async (id) => {
    return await productsRepository.get(id);
  },
  getAll: async () => {
    return await productsRepository.getAll();
  },
  update: async (id, product) => {
    return await productsRepository.update(id, product);
  },
  delete: async (id) => {
    return await productsRepository.delete(id);
  },
};

export default productsService;
