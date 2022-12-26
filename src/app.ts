import express from 'express';
import orderController from './controllers/order.controller';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.get('/orders', orderController.getAll);
app.post('/products', productController.insert);
app.post('/login', userController.login);
app.post('/users', userController.insertUser);

export default app;
