import { HttpException } from '../../../../../packages/shared-utils/src/http-exception';
import { comparePassword, hashPassword } from '../../shared/password';
import { signToken } from '../../shared/jwt';

import { AuthRepository } from './auth.repository';
import { IUser } from './auth.types';

export class AuthService {
  constructor(private repository: AuthRepository) {}

  async register(payload: IUser) {
    const { name, username, email, password } = payload;
    const emailExists = await this.repository.findByEmail(email);
    if (emailExists) throw new HttpException(409, 'Email already exists');

    const hashedPassword = (await hashPassword(password)) as string;

    return await this.repository.create({
      _id: crypto.randomUUID(),
      name,
      username,
      email,
      password: hashedPassword,
      role: 'user',
    });
  }

  async login(email: string, password: string) {
    const user = await this.repository.findByEmail(email);
    if (!user) throw new HttpException(401, 'Invalid credentials');

    const validPassword = await comparePassword(user.password, password);
    if (!validPassword) throw new HttpException(401, 'Invalid credentials');

    const token = signToken({
      userId: user._id,
      role: user.role,
    });

    return { token };
  }
}
