import { productModel } from '../models/product.js';

export default class ProductManager {
  constructor() {
    this.baseUrl = process.env.BASE_URL || 'http://localhost:8080';
  }

  async getAllProducts(params = {}) {
    const paginate = this._buildPaginationOptions(params);

    const products = await productModel.paginate({}, paginate);

    this._addNavigationLinks(products, paginate, params);

    return products;
  }

  async getProductByID(pid) {
    if (!pid) {
      throw new Error('El ID del producto es requerido');
    }

    const product = await productModel.findById(pid);

    if (!product) {
      throw new Error(`El producto ${pid} no fue encontrado`);
    }

    return product;
  }

  async createProduct(product) {
    const requiredFields = [
      'title',
      'description',
      'code',
      'price',
      'stock',
      'category',
    ];

    this._validateRequiredFields(product, requiredFields);

    const { title, description, code, price, stock, category, thumbnails } =
      product;

    return await productModel.create({
      title,
      description,
      code,
      price,
      stock,
      category,
      thumbnails: thumbnails || [],
    });
  }

  async updateProduct(pid, productUpdate) {
    if (!pid) {
      throw new Error('El ID del producto es requerido');
    }

    const result = await productModel.updateOne({ _id: pid }, productUpdate);

    if (result.matchedCount === 0) {
      throw new Error(`El producto ${pid} no fue encontrado`);
    }

    return result;
  }

  async deleteProduct(pid) {
    if (!pid) {
      throw new Error('El ID del producto es requerido');
    }

    const result = await productModel.deleteOne({ _id: pid });

    if (result.deletedCount === 0) {
      throw new Error(`El producto ${pid} no fue encontrado`);
    }

    return result;
  }

  _buildPaginationOptions(params) {
    const paginate = {
      page: Math.max(1, parseInt(params.page) || 1),
      limit: Math.min(100, Math.max(1, parseInt(params.limit) || 10)),
    };

    if (params.sort && ['asc', 'desc'].includes(params.sort)) {
      paginate.sort = { price: params.sort };
    }

    return paginate;
  }

  _addNavigationLinks(products, paginate, params) {
    const baseQuery = this._buildQueryString(paginate, params);

    products.prevLink = products.hasPrevPage
      ? `${this.baseUrl}/products?page=${products.prevPage}${baseQuery}`
      : null;

    products.nextLink = products.hasNextPage
      ? `${this.baseUrl}/products?page=${products.nextPage}${baseQuery}`
      : null;
  }

  _buildQueryString(paginate, params) {
    const queryParams = [];

    if (paginate.limit !== 10) {
      queryParams.push(`limit=${paginate.limit}`);
    }

    if (paginate.sort) {
      queryParams.push(`sort=${params.sort}`);
    }

    return queryParams.length > 0 ? `&${queryParams.join('&')}` : '';
  }

  _validateRequiredFields(product, requiredFields) {
    if (!product || typeof product !== 'object') {
      throw new Error('Los datos del producto son requeridos');
    }

    const missingFields = requiredFields.filter((field) => !product[field]);

    if (missingFields.length > 0) {
      throw new Error(
        `Faltan los siguientes campos requeridos: ${missingFields.join(', ')}`
      );
    }
  }
}
