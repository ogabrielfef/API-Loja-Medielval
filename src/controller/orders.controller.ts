import { Request, Response } from 'express';
import OrderService from '../services/orders.services';

export default class ProductsController {
  public orderService = new OrderService();

  async getOrders(_req: Request, res: Response) {
    const orders = await this.orderService.getAllOrders();
    res.status(200).json(orders);
  }
}