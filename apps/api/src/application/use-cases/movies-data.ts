import { MoviesTvRepository } from '@app/protocols/movies-tv-repository';

export class MoviesTvDataUseCase {
  constructor(private repo: MoviesTvRepository) {}

  async execute() {
    const movies = await this.repo.getAll('MOVIE');
    const tvshows = await this.repo.getAll('TVSHOW');

    return { movies, tvshows };
  }
}
