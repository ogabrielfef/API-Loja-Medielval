import { Request, Response } from 'express';
import UserService from '../services/users.services';
import { IUser } from '../interfaces/IUser';

export default class UserController {
  public userService = new UserService();

  async createNewUser(req: Request<object, object, IUser>, res: Response) {
    const { body } = req;
    const token = await this.userService.createUser(body);
    return res.status(201).json({ token });
  }

  async userLogin(req: Request, res: Response) {
    const { body } = req;
    const { type, message } = await this.userService.login(body);
    if (type) return res.status(type).json({ message });
    return res.status(200).json({ token: message });
  }
}