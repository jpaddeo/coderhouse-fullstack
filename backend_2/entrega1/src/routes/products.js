import { Router } from 'express';

import ProductManager from '../dao/managers/product.js';
import { authenticateJWT, requireAdmin } from '../middlewares/auth.js';

const router = Router();
const productManager = new ProductManager();

router.get('/', async (req, res) => {
  try {
    const products = await productManager.getAllProducts(req.query);

    res.json({
      message: 'Productos obtenidos exitosamente',
      products,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await productManager.getProductByID(pid);

    res.json({
      message: 'Producto obtenido exitosamente',
      product,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post('/', authenticateJWT, requireAdmin, async (req, res) => {
  try {
    const newProduct = await productManager.createProduct(req.body);

    res.status(201).json({
      message: 'Producto creado exitosamente',
      product: newProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:pid', authenticateJWT, requireAdmin, async (req, res) => {
  try {
    const { pid } = req.params;
    const updatedProduct = await productManager.updateProduct(pid, req.body);

    res.json({
      message: 'Producto actualizado exitosamente',
      product: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:pid', authenticateJWT, requireAdmin, async (req, res) => {
  try {
    const { pid } = req.params;
    await productManager.deleteProduct(pid);

    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
