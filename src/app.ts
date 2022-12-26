import express from 'express';
import orderController from './controllers/order.controller';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';
import productMiddlewares from './middlewares/product.middlewares';
import usersMiddlewares from './middlewares/users.middlewares';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.get('/orders', orderController.getAll);
app.post(
  '/products', 
  productMiddlewares.nameValidation,
  productMiddlewares.amountValidation,
  productController.insert,
);
app.post('/login', userController.login);
app.post(
  '/users',
  usersMiddlewares.userNameValidation,
  usersMiddlewares.passwordValidation,
  usersMiddlewares.levelValidation,
  usersMiddlewares.vocationValidation,
  userController.insertUser,
);

export default app;
