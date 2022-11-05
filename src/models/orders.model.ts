import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/IOrders';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  public async getOrders(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id, o.userId,
        JSON_ARRAYAGG(p.id) AS productsIds
        FROM Trybesmith.Orders 
        AS o JOIN Trybesmith.Products 
        AS p ON o.id = p.orderId 
        GROUP BY p.orderId`,
    );
    return rows;
  }
}