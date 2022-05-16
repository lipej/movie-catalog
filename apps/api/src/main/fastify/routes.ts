import { JwtSignToken } from '@app/services/jwt-sign-token';
import { FastifyRouteAdapter } from '@main/adapters';
import { FastifyMiddlewareAdapter } from '@main/adapters/fastify-middleware-adapter';
import { LoginControllerFactory } from '@main/factories/login';
import { UserActiveControllerFactory } from '@main/factories/user-active';
import { UserCreationControllerFactory } from '@main/factories/user-creation';
import { MovieTvDataControllerFactory } from '@main/factories/movie-tv-data';
import { MoviesTvDataControllerFactory } from '@main/factories/movies-tv-data';
import { AuthMiddleware } from '@presentation/middlewares/auth';
import { FastifyInstance } from 'fastify';

import type { Params as LoginParams } from '@presentation/controllers/login';
import type { Params as UserActiveParams } from '@presentation/controllers/user-active';
import type { Params as UserCreationParams } from '@presentation/controllers/user-creation';
import type { Params as MovieTvParams } from '@presentation/controllers/movie-tv'


type Request<T> = {
  Querystring: Partial<T>;
  Params: Partial<T>;
  Body: Partial<T>;
};

const tokenService = new JwtSignToken(process.env.JWT_SECRET as string);

const secureRoutesMiddlewares = [new FastifyMiddlewareAdapter(new AuthMiddleware(tokenService)).adapt()];

export const setupRoutes = (server: FastifyInstance) => {
  server.get('/health', function (_request, reply) {
    reply.send({ message: 'ALIVE!' });
  });

  server.get<Request<unknown>>(
    '/movies',
    { preHandler: secureRoutesMiddlewares },
    new FastifyRouteAdapter(MoviesTvDataControllerFactory.create()).adapt()
  );
  server.get<Request<MovieTvParams>>(
    '/movie',
    { preHandler: secureRoutesMiddlewares },
    new FastifyRouteAdapter(MovieTvDataControllerFactory.create()).adapt()
  );
  server.post<Request<UserCreationParams>>(
    '/user',
    new FastifyRouteAdapter(UserCreationControllerFactory.create()).adapt()
  );
  server.post<Request<UserActiveParams>>(
    '/active',
    new FastifyRouteAdapter(UserActiveControllerFactory.create()).adapt()
  );
  server.post<Request<LoginParams>>('/login', new FastifyRouteAdapter(LoginControllerFactory.create()).adapt());
};
