import { IUser } from './auth.types';

export class AuthRepository {
  private users: IUser[] = [];

  async findByEmail(email: string): Promise<IUser | undefined> {
    return this.users.find(user => user.email == email);
  }

  async create(user: IUser): Promise<IUser> {
    this.users.push(user);
    return user;
  }
}
