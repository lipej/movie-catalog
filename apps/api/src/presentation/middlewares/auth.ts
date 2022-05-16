import { SignToken } from '@app/protocols/signtoken';
import { Middleware } from '../protocols/middleware';

type Auth = {
  authorization?: string;
};

type TokenData = {
  email: string;
};

export class AuthMiddleware implements Middleware<Auth> {
  constructor(private tokenService: SignToken) {}

  async handle(data: Auth) {
    const token = data.authorization;
    if (!token) {
      return { status: 400, message: 'token not valid' };
    }

    try {
      const { email } = this.tokenService.validate(token.replace('Bearer ', ''));

      return {
        fields: {
          email
        }
      };
    } catch (err) {
      return { status: 500, message: (err as Error).message };
    }
  }
}
