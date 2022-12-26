import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';
import { TResult, TUser } from '../types';

// const insert = async (product: TProduct) => {
//   const newProduct = await productModel.insert(product);
//   return { type: null, message: newProduct };
// };

const generateToken = (user: TUser) => {
  const payload = { id: user.id, username: user.username };
  return jwt.sign(payload, process.env.JWT_SECRET as string, { algorithm: 'HS256',
    expiresIn: '1d' });
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
};