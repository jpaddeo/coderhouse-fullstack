import bcrypt from 'bcrypt';

import { userModel } from '../models/user.js';

export default class UserManager {
  constructor() {}

  _hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  _verifyPassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  async getAllUsers() {
    try {
      const users = await userModel.find().populate('cart');
      return users;
    } catch (error) {
      throw new Error(`Error al obtener usuarios: ${error.message}`);
    }
  }

  async getUserById(uid) {
    try {
      if (!uid) {
        throw new Error('El ID del usuario es requerido');
      }

      const user = await userModel.findById(uid).populate('cart');

      if (!user) {
        throw new Error(`El usuario ${uid} no fue encontrado`);
      }

      return user;
    } catch (error) {
      throw new Error(`Error al obtener usuario: ${error.message}`);
    }
  }

  async getUserByEmail(email) {
    try {
      if (!email) {
        throw new Error('El email es requerido');
      }

      const user = await userModel.findOne({ email }).populate('cart');

      if (!user) {
        throw new Error(`El usuario con email ${email} no fue encontrado`);
      }

      return user;
    } catch (error) {
      throw new Error(`Error al obtener usuario por email: ${error.message}`);
    }
  }

  async createUser(userData) {
    try {
      const requiredFields = [
        'first_name',
        'last_name',
        'email',
        'age',
        'password',
      ];

      this._validateRequiredFields(userData, requiredFields);

      const { first_name, last_name, email, age, password, cart, role } =
        userData;

      const hashedPassword = this._hashPassword(password);

      const newUser = await userModel.create({
        first_name,
        last_name,
        email,
        age,
        password: hashedPassword, // Guardar contraseña encriptada
        cart,
        role: role || 'user',
      });

      return newUser;
    } catch (error) {
      if (error.code === 11000) {
        // evito controlar manualmente si existe un usuario con el mismo email (más performante)
        throw new Error('El email ya está registrado');
      }
      throw new Error(`Error al crear usuario: ${error.message}`);
    }
  }

  async updateUser(uid, userData) {
    try {
      if (!uid) {
        throw new Error('El ID del usuario es requerido');
      }

      // Si se está actualizando la contraseña, encriptarla
      if (userData.password) {
        userData.password = this._hashPassword(userData.password);
      }

      const updatedUser = await userModel
        .findByIdAndUpdate(uid, userData, { new: true, runValidators: true })
        .populate('cart');

      if (!updatedUser) {
        throw new Error(`El usuario ${uid} no fue encontrado`);
      }

      return updatedUser;
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('El email ya está registrado');
      }
      throw new Error(`Error al actualizar usuario: ${error.message}`);
    }
  }

  async deleteUser(uid) {
    try {
      if (!uid) {
        throw new Error('El ID del usuario es requerido');
      }

      const deletedUser = await userModel.findByIdAndDelete(uid);

      if (!deletedUser) {
        throw new Error(`El usuario ${uid} no fue encontrado`);
      }

      return deletedUser;
    } catch (error) {
      throw new Error(`Error al eliminar usuario: ${error.message}`);
    }
  }

  async authenticateUser(email, password) {
    try {
      if (!email || !password) {
        throw new Error('Email y contraseña son requeridos');
      }

      const user = await userModel.findOne({ email }).populate('cart');

      if (!user) {
        throw new Error('Credenciales inválidas');
      }

      const isValidPassword = this._verifyPassword(password, user.password);

      if (!isValidPassword) {
        throw new Error('Credenciales inválidas');
      }

      return user;
    } catch (error) {
      throw new Error(`Error al autenticar usuario: ${error.message}`);
    }
  }

  _validateRequiredFields(data, requiredFields) {
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      throw new Error(
        `Los siguientes campos son requeridos: ${missingFields.join(', ')}`
      );
    }
  }
}
