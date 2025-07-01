import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router';

import '@/index.css';
import Layout from '@/layouts/Layout';
import {
  NotFoundPage,
  CategoriesPage,
  HomePage,
  ProductItemPage,
  CartPage,
} from '@/pages';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/categorias/:categoria?' element={<CategoriesPage />} />
          <Route path='/productos/:producto' element={<ProductItemPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
