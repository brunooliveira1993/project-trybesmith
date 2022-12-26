import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';
import { TResult, TUser } from '../types';

const generateToken = (user: TUser) => {
  const payload = { id: user.id, username: user.username };
  return jwt.sign(payload, process.env.JWT_SECRET as string, { algorithm: 'HS256',
    expiresIn: '1d' });
};

const insertUser = async (user: TUser) => {
  await userModel.insertUser(user);
  const newUser = { username: user.username, password: user.password };
  return { type: null, message: generateToken(newUser) };
};

const login = async (loginBody: TUser): Promise<TResult> => {
  if (!loginBody.username) {
    return { type: 'NO USER', message: '"username" is required' };
  }
  if (!loginBody.password) {
    return { type: 'NO PASSWORD', message: '"password" is required' };
  }
  const user = await userModel.getByEmail(loginBody.username);
  const password = user?.password === loginBody.password;
  if (!password) {
    return { type: 'INVALIDE USER', message: 'Username or password invalid' };
  }
  if (!user) return { type: 'INVALIDE USER', message: 'Username or password invalid' };
  return { type: 'OK', message: generateToken(user) };
};

export default {
  login,
  insertUser,
};