import express from 'express';
import productsRoutes from './routes/products.routes';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use(httpErrorMiddleware);

export default app;
