import { IOrder } from '../interfaces/IOrders';
import OrderModel from '../models/orders.model';

export default class OrderService {
  public order = new OrderModel();

  public getAllOrders(): Promise<IOrder[]> {
    const orders = this.order.getOrders();
    return orders;
  }
}
