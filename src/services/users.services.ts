import jsonwebtoken from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/users.model';
// import validate from '../middlewares/login.middleware';

export default class UserService {
  public user = new UserModel();

  public jwt = jsonwebtoken;

  public async createUser(userData: IUser) {
    const user = await this.user.createUser(userData);

    if (user) return this.generateToken(user);
  }

  public generateToken(user: IUser) {
    const payload = { id: user.id, name: user.username }; 
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }

  public async login(userLogin: ILogin) {
    const { username, password } = userLogin;
    if (!username) return { type: 400, message: '"username" is required' };
    if (!password) return { type: 400, message: '"password" is required' };

    const user = await this.user.loginUser(userLogin);
    if (user.length > 0) {
      const token = this.generateToken(user[0]);
      return { type: null, message: token };
    }

    return { type: 401, message: 'Username or password invalid' };
  }
}