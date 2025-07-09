import { Router } from 'express';
import {
  authenticateLocal,
  authenticateRegister,
} from '../middlewares/auth.js';

const router = Router();

router.post('/login', authenticateLocal);

router.post('/register', authenticateRegister);

router.post('/logout', (req, res) => {
  res.json({ message: 'Logout exitoso' });
});

export default router;
