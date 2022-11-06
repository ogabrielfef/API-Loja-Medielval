import { ILogin } from '../interfaces/ILogin';

export default function validate(userLogin: ILogin) {
  try {
    const { username, password } = userLogin;

    if (!username) {
      return { type: 400, message: '"username" is required' };
    }
    if (!password) {
      return { type: 400, message: '"password" is required' };
    }
  } catch (err) {
    console.log(err);
  }
}
