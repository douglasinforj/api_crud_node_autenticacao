import { register, login } from '../services/AuthService.js';
import User from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const result = await register(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const result = await login(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  res.json(users);
};
