import productModel from '../models/product.model';
import { TProduct } from '../types';

const getAll = async (): Promise<TProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const insert = async (product: TProduct) => {
  if (!product.name) {
    return { type: 'NO NAME', message: '"name" is required' };
  }
  const newProduct = await productModel.insert(product);
  return { type: null, message: newProduct };
};

export default {
  getAll,
  insert,
};