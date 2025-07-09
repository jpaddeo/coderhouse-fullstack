import { Router } from 'express';

import UserManager from '../dao/managers/product.js';
import { authenticateJWT, requireAdmin } from '../middlewares/auth.js';

const router = Router();
const userManager = new UserManager();

// Obtener todos los usuarios (solo admin)
router.get('/', authenticateJWT, requireAdmin, async (req, res) => {
  try {
    const users = await userManager.getAllUsers();
    const usersResponse = users.map((user) => ({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      age: user.age,
      role: user.role,
      cart: user.cart,
    }));

    res.json({
      message: 'Usuarios obtenidos exitosamente',
      users: usersResponse,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear nuevo usuario (solo admin)
router.post('/', authenticateJWT, requireAdmin, async (req, res) => {
  try {
    const newUser = await userManager.createUser(req.body);

    // Remover contraseña de la respuesta
    const userResponse = {
      _id: newUser._id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      age: newUser.age,
      role: newUser.role,
      cart: newUser.cart,
    };

    res.status(201).json({
      message: 'Usuario creado exitosamente',
      user: userResponse,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener usuario por ID (solo admin o el mismo usuario)
router.get('/:uid', authenticateJWT, async (req, res) => {
  try {
    const { uid } = req.params;
    if (req.user.role !== 'admin' && req.user._id.toString() !== uid) {
      return res.status(403).json({
        error: 'No tienes permisos para acceder a este recurso',
      });
    }

    const user = await userManager.getUserById(uid);

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
      message: 'Usuario obtenido exitosamente',
      user: userResponse,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Actualizar usuario (solo admin o el mismo usuario)
router.put('/:uid', authenticateJWT, async (req, res) => {
  try {
    const { uid } = req.params;

    if (req.user.role !== 'admin' && req.user._id.toString() !== uid) {
      return res.status(403).json({
        error: 'No tienes permisos para acceder a este recurso',
      });
    }

    if (req.user.role !== 'admin' && req.body.role) {
      delete req.body.role;
    }

    const updatedUser = await userManager.updateUser(uid, req.body);

    const userResponse = {
      _id: updatedUser._id,
      first_name: updatedUser.first_name,
      last_name: updatedUser.last_name,
      email: updatedUser.email,
      age: updatedUser.age,
      role: updatedUser.role,
      cart: updatedUser.cart,
    };

    res.json({
      message: 'Usuario actualizado exitosamente',
      user: userResponse,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar usuario (solo admin)
router.delete('/:uid', authenticateJWT, requireAdmin, async (req, res) => {
  try {
    const { uid } = req.params;
    await userManager.deleteUser(uid);

    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
