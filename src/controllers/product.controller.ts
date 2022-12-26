import { Request, Response } from 'express';
import productService from '../services/product.service';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const insert = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const { message } = await productService.insert(newProduct);
  return res.status(201).json(message);
};

export default {
  getAll,
  insert,
};