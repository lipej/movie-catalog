import { MoviesTvRepository } from '@app/protocols/movies-tv-repository';

export class MovieTvDataUseCase {
  constructor(private repo: MoviesTvRepository) {}

  async execute(id: string) {
    return await this.repo.getById(id);
  }
}
