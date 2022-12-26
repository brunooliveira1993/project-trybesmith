import { NextFunction, Request, Response } from 'express';

const userNameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  const usernameLength = username.length > 2;
  const usernameType = typeof (username) === 'string';
  if (!usernameType) {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (!usernameLength) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  
  next();
};

const vocationValidation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }
  const vocationLength = vocation.length > 2;
  const vocationType = typeof (vocation) === 'string';
  if (!vocationType) {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  if (!vocationLength) {
    return res.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  
  next();
};

const levelValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const zeroValidation = level === 0;
  const levelLength = level > 0;
  const levelType = typeof (level) === 'number';
  if (!level && !zeroValidation) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (!levelType) {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (!levelLength) {
    return res.status(422)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  
  next();
};

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  const passwordLength = password.length >= 8;
  const passwordType = typeof (password) === 'string';
  if (!passwordType) {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (!passwordLength) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  
  next();
};

export default {
  userNameValidation,
  vocationValidation,
  levelValidation,
  passwordValidation,
};