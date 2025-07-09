import { cartModel } from '../models/cart.js';

export default class CartManager {
  constructor(productManager) {
    this.productManager = productManager;
  }

  async getAllCarts() {
    return cartModel.find();
  }

  async getProductsFromCartByID(cid) {
    const cart = await cartModel
      .findOne({ _id: cid })
      .populate('products.product');

    if (!cart) throw new Error(`El carrito ${cid} no existe!`);

    return cart;
  }

  async createCart() {
    return await cartModel.create({ products: [] });
  }

  async addProductByID(cid, pid) {
    await this.productManager.getProductByID(pid);

    const cart = await cartModel.findOne({ _id: cid });
    if (!cart) throw new Error(`El carrito ${cid} no existe!`);

    const existingProductIndex = cart.products.findIndex(
      (item) => item.product.toString() === pid
    );

    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += 1;
    } else {
      cart.products.push({
        product: pid,
        quantity: 1,
      });
    }

    await cartModel.updateOne({ _id: cid }, { products: cart.products });
    return await this.getProductsFromCartByID(cid);
  }
  async deleteProductByID(cid, pid) {
    await this.productManager.getProductByID(pid);

    const cart = await cartModel.findOne({ _id: cid });
    if (!cart) throw new Error(`El carrito ${cid} no existe!`);

    const newProducts = cart.products.filter(
      (item) => item.product.toString() !== pid
    );

    await cartModel.updateOne({ _id: cid }, { products: newProducts });
    return await this.getProductsFromCartByID(cid);
  }

  async updateAllProducts(cid, products) {
    await Promise.all(
      products.map((item) => this.productManager.getProductByID(item.product))
    );

    await cartModel.updateOne({ _id: cid }, { products });
    return await this.getProductsFromCartByID(cid);
  }

  async updateProductByID(cid, pid, quantity) {
    const parsedQuantity = parseInt(quantity);
    if (!quantity || isNaN(parsedQuantity) || parsedQuantity <= 0) {
      throw new Error(`La cantidad ingresada no es válida!`);
    }

    await this.productManager.getProductByID(pid);

    const cart = await cartModel.findOne({ _id: cid });
    if (!cart) throw new Error(`El carrito ${cid} no existe!`);

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === pid
    );

    if (productIndex === -1) {
      throw new Error(`El producto ${pid} no existe en el carrito ${cid}!`);
    }

    cart.products[productIndex].quantity = parsedQuantity;

    await cartModel.updateOne({ _id: cid }, { products: cart.products });
    return await this.getProductsFromCartByID(cid);
  }

  async deleteAllProducts(cid) {
    await cartModel.updateOne({ _id: cid }, { products: [] });
    return await this.getProductsFromCartByID(cid);
  }
}
