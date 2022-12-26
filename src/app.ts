import express from 'express';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.post('/products', productController.insert);
app.post('/login', userController.login);

export default app;
