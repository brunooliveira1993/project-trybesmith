import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAll = async (req: Request, res: Response) => {
  const products = await orderService.getAll();
  res.status(200).json(products);
};

export default {
  getAll,
};