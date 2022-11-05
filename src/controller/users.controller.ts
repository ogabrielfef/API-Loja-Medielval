import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { IUser } from '../interfaces/IUser';

export default class UserController {
  public userService = new UserService();

  async createNewUser(req: Request<object, object, IUser>, res: Response) {
    const { body } = req;
    const token = await this.userService.createUser(body);
    return res.status(201).json({ token });
  }
}