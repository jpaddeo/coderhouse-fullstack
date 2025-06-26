import express from 'express';

import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';

import productsService from './services/products.js';
import cartsService from './services/carts.js';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, async () => {
  console.log('[INICIO] - Validación y/o creación de archivo de datos de productos.');
  await productsService.init();
  console.log('[FIN] - Validación y/o creación de archivo de datos de productos.');
  console.log('[INICIO] - Validación y/o creación de archivo de datos de carritos.');
  await cartsService.init();
  console.log('[FIN] - Validación y/o creación de archivo de datos de carritos.');
  console.log(`[SERVER ON] - El servidor de la ENTREGA 1 está ejecutándose en http://localhost:${PORT}`);
});
