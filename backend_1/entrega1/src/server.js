import express from 'express';

import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
  console.log(`Entrega 1 server is running on http://localhost:${PORT}`);
});
