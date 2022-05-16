import { MovieNotFound } from '@app/errors/movie-not-found';
import { MoviesTvRepository } from '@app/protocols/movies-tv-repository';
import { PrismaClient, MovieShow } from '@prisma/client';
import { MovieTv } from 'domain/movietv';

export class MoviesTvPrismaRepository implements MoviesTvRepository {
  constructor(private db: PrismaClient) {}

  async getAll(type: 'MOVIE' | 'TVSHOW'): Promise<MovieTv[]> {
    const dataFromDb = await this.db.movieShow.findMany({ take: 6, where: { type } });

    return dataFromDb.map((data) => this.createMovieEntity(data));
  }

  async getById(id: string): Promise<MovieTv> {
    const dataFromDb = await this.db.movieShow.findUnique({ where: { id } });

    if (!dataFromDb) throw new MovieNotFound(id)

    return this.createMovieEntity(dataFromDb);
  }

  private createMovieEntity(data: MovieShow) {
    return new MovieTv({
      ...data
    });
  }
}
