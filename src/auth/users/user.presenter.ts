import { User } from '@prisma/client';
import { IPresenter } from 'src/_infra/IPresenter';

export class UserPresenter implements IPresenter {
  constructor(readonly user: User) {}
  toJSON(): object {
    return {
      id: this.user.id,
      email: this.user.email,
      roles: this.user.roles,
      createdAt: this.user.createdAt,
    };
  }
}
