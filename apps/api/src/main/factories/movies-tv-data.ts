import { MoviesTvDataUseCase } from '@app/use-cases/movies-data';
import { MoviesTvPrismaRepository } from '@infra/repositories/prisma/movietv';
import { MoviesTvDataController } from '@presentation/controllers/movies-tv';
import { PrismaClient } from '@prisma/client';

export class MoviesTvDataControllerFactory {
  static create() {
    const db = new PrismaClient();
    const repo = new MoviesTvPrismaRepository(db);
    const useCase = new MoviesTvDataUseCase(repo);
    return new MoviesTvDataController(useCase);
  }
}
