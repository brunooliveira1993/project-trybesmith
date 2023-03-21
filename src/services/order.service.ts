import orderModel from '../models/order.model';
import { TOrder } from '../types';

const getAll = async (): Promise<TOrder[]> => {
  const products = await orderModel.getAll();
  return products;
};

const insert = async (userId: number, productId: number[]) => {
  const orderId = await orderModel.inser(userId);
  const promises = productId.map((item) => orderModel.update(orderId, item));
  await Promise.all(promises);
  return { type: null, message: { userId, productId } };
};

export default {
  getAll,
  insert,
};