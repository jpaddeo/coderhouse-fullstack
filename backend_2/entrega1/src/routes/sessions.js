import { Router } from 'express';
import { authenticateJWT } from '../middlewares/auth.js';

const router = Router();

router.get('/current', authenticateJWT, (req, res) => {
  const userResponse = {
    _id: req.user._id,
    first_name: req.user.first_name,
    last_name: req.user.last_name,
    email: req.user.email,
    age: req.user.age,
    role: req.user.role,
    cart: req.user.cart,
  };

  res.json({
    message: 'Sesión actual obtenido exitosamente',
    user: userResponse,
  });
});

export default router;
