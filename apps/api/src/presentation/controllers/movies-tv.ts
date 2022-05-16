import { MoviesTvDataUseCase } from '@app/use-cases/movies-data';
import { Controller } from '@presentation/protocols';
import { GenerateResponse } from '@presentation/utils/response-generator';

export class MoviesTvDataController implements Controller<unknown> {
  constructor(private moviesTvDataUseCase: MoviesTvDataUseCase) {}

  async handle() {
    try {
      return GenerateResponse.success(
        await this.moviesTvDataUseCase.execute()
      ); 
    } catch (err) {
      return GenerateResponse.error(err as Error);
    }
  }
}
