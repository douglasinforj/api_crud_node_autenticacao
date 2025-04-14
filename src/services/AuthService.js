import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../utils/generateToken.js';

export const register = async ({ name, email, password }) => {
  const exists = await User.findOne({ where: { email } });
  if (exists) throw new Error('Usuário já cadastrado');

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });
  return { user, token: generateToken(user.id) };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new Error('Credenciais inválidas');
  return { user, token: generateToken(user.id) };
};
