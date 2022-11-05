import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const router = Router();

const productsController = new ProductsController();

router.post(
  '/',
  productsController.createProduct.bind(productsController),
);

export default router;