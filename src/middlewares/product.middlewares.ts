import { NextFunction, Request, Response } from 'express';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const nameLength = name.length > 2;
  const nameType = typeof (name) === 'string';
  if (!nameType) {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (!nameLength) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  
  next();
};

const amountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  
  const amountLength = amount.length > 2;
  const amountType = typeof (amount) === 'string';
  if (!amountType) {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  if (!amountLength) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};

export default {
  nameValidation,
  amountValidation,
};