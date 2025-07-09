import passport from 'passport';
import { generateToken } from '../config/passport.js';

export const authenticateLocal = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    if (!user) {
      return res.status(401).json({
        error: info?.message || 'Credenciales inválidas',
      });
    }

    const token = generateToken(user);
    const userResponse = {
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      age: user.age,
      role: user.role,
      cart: user.cart,
    };

    res.json({
      message: 'Login exitoso',
      token,
      user: userResponse,
    });
  })(req, res, next);
};

export const authenticateRegister = (req, res, next) => {
  passport.authenticate('register', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    if (!user) {
      return res.status(400).json({
        error: info?.message || 'Error al registrar usuario',
      });
    }

    const token = generateToken(user);
    const userResponse = {
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      age: user.age,
      role: user.role,
      cart: user.cart,
    };

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: userResponse,
    });
  })(req, res, next);
};

export const authenticateJWT = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    if (!user) {
      return res.status(401).json({
        error: 'Token inválido o expirado',
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};

export const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'No tienes permisos para acceder a este recurso',
      });
    }

    next();
  };
};

export const requireAdmin = authorizeRole(['admin']);
export const requireUser = authorizeRole(['user', 'admin']);
