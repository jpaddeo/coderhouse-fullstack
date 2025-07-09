import { Router } from 'express';

import CartManager from '../dao/managers/cart.js';
import ProductManager from '../dao/managers/product.js';
import { authenticateJWT, requireUser } from '../middlewares/auth.js';

const router = Router();
const productManager = new ProductManager();
const cartManager = new CartManager(productManager);

router.get('/', authenticateJWT, requireUser, async (req, res) => {
  try {
    const carts = await cartManager.getAllCarts();

    res.json({
      message: 'Carritos obtenidos exitosamente',
      carts,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:cid', authenticateJWT, requireUser, async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await cartManager.getProductsFromCartByID(cid);

    res.json({
      message: 'Carrito obtenido exitosamente',
      cart,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post('/', authenticateJWT, requireUser, async (req, res) => {
  try {
    const newCart = await cartManager.createCart();

    res.status(201).json({
      message: 'Carrito creado exitosamente',
      cart: newCart,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post(
  '/:cid/product/:pid',
  authenticateJWT,
  requireUser,
  async (req, res) => {
    try {
      const { cid, pid } = req.params;
      const updatedCart = await cartManager.addProductByID(cid, pid);

      res.json({
        message: 'Producto agregado al carrito exitosamente',
        cart: updatedCart,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.put(
  '/:cid/product/:pid',
  authenticateJWT,
  requireUser,
  async (req, res) => {
    try {
      const { cid, pid } = req.params;
      const { quantity } = req.body;

      const updatedCart = await cartManager.updateProductByID(
        cid,
        pid,
        quantity
      );

      res.json({
        message: 'Cantidad del producto actualizada exitosamente',
        cart: updatedCart,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.put('/:cid', authenticateJWT, requireUser, async (req, res) => {
  try {
    const { cid } = req.params;
    const { products } = req.body;

    const updatedCart = await cartManager.updateAllProducts(cid, products);

    res.json({
      message: 'Productos del carrito actualizados exitosamente',
      cart: updatedCart,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete(
  '/:cid/product/:pid',
  authenticateJWT,
  requireUser,
  async (req, res) => {
    try {
      const { cid, pid } = req.params;
      const updatedCart = await cartManager.deleteProductByID(cid, pid);

      res.json({
        message: 'Producto eliminado del carrito exitosamente',
        cart: updatedCart,
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
);

router.delete('/:cid', authenticateJWT, requireUser, async (req, res) => {
  try {
    const { cid } = req.params;
    const updatedCart = await cartManager.deleteAllProducts(cid);

    res.json({
      message: 'Todos los productos eliminados del carrito exitosamente',
      cart: updatedCart,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
