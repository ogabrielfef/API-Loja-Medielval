import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interfaces/IUser';

export default class UserModel {
  private connection = mysql;

  public async createUser(user: IUser) {
    const { username, classe, level, password } = user;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    console.log({ id: insertId, ...user });
    return { id: insertId, ...user };
  }
}
