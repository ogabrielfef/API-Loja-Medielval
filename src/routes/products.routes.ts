import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const router = Router();

const productsController = new ProductsController();

router.get(
  '/',
  productsController.getProduct.bind(productsController),
);

router.post(
  '/',
  productsController.createProduct.bind(productsController),
);

export default router;