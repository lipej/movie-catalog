import { MovieTvDataUseCase } from '@app/use-cases/movie-data';
import { Controller } from '@presentation/protocols';
import { GenerateResponse } from '@presentation/utils/response-generator';

export type Params = {
  id: string
}

export class MovieTvDataController implements Controller<Params> {
  constructor(private moviesTvDataUseCase: MovieTvDataUseCase) {}

  async handle(params: Params) {
    try {
      return GenerateResponse.success(
        await this.moviesTvDataUseCase.execute(params.id)
      );
    } catch (err) {
      return GenerateResponse.error(err as Error);
    }
  }
}
