import { MovieTvDataUseCase } from '@app/use-cases/movie-data';
import { MoviesTvPrismaRepository } from '@infra/repositories/prisma/movietv';
import { MovieTvDataController } from '@presentation/controllers/movie-tv';
import { PrismaClient } from '@prisma/client';

export class MovieTvDataControllerFactory {
  static create() {
    const db = new PrismaClient();
    const repo = new MoviesTvPrismaRepository(db);
    const useCase = new MovieTvDataUseCase(repo);
    return new MovieTvDataController(useCase);
  }
}
