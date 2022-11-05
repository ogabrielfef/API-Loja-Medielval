import { Router } from 'express';
import OrderController from '../controller/orders.controller';

const router = Router();

const oderController = new OrderController();

router.get(
  '/',
  oderController.getOrders.bind(oderController),
);

export default router;