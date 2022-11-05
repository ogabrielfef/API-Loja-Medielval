import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/IProduct';
import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;

  public async createProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    console.log(product);
    return { id: insertId, ...product };
  }
}