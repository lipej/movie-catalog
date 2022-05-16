import { PrismaClient } from '@prisma/client';
import { UserPrismaRepository } from '@infra/repositories/prisma/user';
import { CryptCryptoService } from '@app/services/crypt';
import { createUser } from '@test/fixtures/gen-user';
import { LoginUseCase } from '@app/use-cases/login';
import { JwtSignToken } from '@app/services/jwt-sign-token';
import { UserNotFound } from '@app/errors/user-not-found';
import { InactiveUser } from '@app/errors/inactive-user';
import { MatchError } from '@app/errors/match';

const setup = () => {
  const db = new PrismaClient();
  const cryptoService = new CryptCryptoService('my_secret');
  const userRepository = new UserPrismaRepository(db);
  const tokenService = new JwtSignToken('mu_super_secret');
  const login = new LoginUseCase(userRepository, cryptoService, tokenService);

  return { login, db, cryptoService, tokenService };
};

describe(LoginUseCase.name, () => {
  const { login: useCase, db, cryptoService, tokenService } = setup();

  beforeEach(async () => {
    await db.user.deleteMany();
  });

  afterAll(async () => {
    await db.user.deleteMany();
  });

  it('should generate token for a user and decode it', async () => {
    const { email, password } = await createUser('', db, cryptoService, true);

    const result = await useCase.execute({
      email,
      password
    });

    expect(tokenService.validate(result.token).email).toBe(email);
  });

  it('should thorow error if user was not found', async () => {
    const promise = useCase.execute({
      email: 'foo',
      password: 'bar'
    });

    await expect(promise).rejects.toThrow(new UserNotFound());
  });

  it('should thorow error if user was not active', async () => {
    const { email, password } = await createUser('', db, cryptoService, false);

    const promise = useCase.execute({
      email,
      password
    });

    await expect(promise).rejects.toThrow(new InactiveUser());
  });

  it('should thorow error if password not match', async () => {
    const { email } = await createUser('', db, cryptoService, true);

    const promise = useCase.execute({
      email,
      password: 'any'
    });

    await expect(promise).rejects.toThrow(new MatchError('password'));
  });
});
