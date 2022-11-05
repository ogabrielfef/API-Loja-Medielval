import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/users.model';

export default class UserService {
  public user = new UserModel();

  public jwt = jsonwebtoken;

  public async createUser(userData: IUser) {
    const user = await this.user.createUser(userData);

    if (user) return this.generateToken(user);
  }

  public generateToken(user: IUser) {
    const payload = { level: user.id, name: user.username }; 
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}