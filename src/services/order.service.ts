import orderModel from '../models/order.model';
import { TOrder } from '../types';

const getAll = async (): Promise<TOrder[]> => {
  const products = await orderModel.getAll();
  return products;
};

export default {
  getAll,
};