import { Request, Response } from 'express';
import userService from '../services/user.service';

const login = async (req: Request, res: Response) => {
  const { body } = req;
  const { type, message } = await userService.login(body);
  if (type === 'INVALIDE USER') return res.status(401).json({ message });
  if (type === 'NO PASSWORD') return res.status(400).json({ message });
  if (type === 'NO USER') return res.status(400).json({ message });
  console.log(message);
  return res.status(200).json({ token: message });
};

export default {
  login,
};