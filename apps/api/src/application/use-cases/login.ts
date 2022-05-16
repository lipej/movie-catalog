import { InactiveUser } from '@app/errors/inactive-user';
import { MatchError } from '@app/errors/match';
import { UserNotFound } from '@app/errors/user-not-found';
import { Crypt } from '@app/protocols/crypt';
import { SignToken } from '@app/protocols/signtoken';
import { UserRepository } from '@app/protocols/user-repository';
import * as c from 'crypto-js';

type Params = {
  email: string;
  password: string;
};

export class LoginUseCase {
  constructor(private repo: UserRepository, private cryptService: Crypt, private tokenService: SignToken) {}

  async execute(params: Params) {
    const user = await this.repo.findByEmail(params.email);
    if (!user) throw new UserNotFound();

    if (!user.isActive()) throw new InactiveUser();

    const passwordMatch = this.cryptService.compare(params.password, user.password);

    if (!passwordMatch) throw new MatchError('password');

    return { token: this.tokenService.generate(user), hash: c.MD5(user.email).toString() };
  }
}
