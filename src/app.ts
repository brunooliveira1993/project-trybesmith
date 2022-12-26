import express from 'express';
import productController from './controllers/product.controller';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.post('/products', productController.insert);

export default app;
