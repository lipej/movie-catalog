import { MovieTv } from 'domain/movietv';

export interface MoviesTvRepository {
  getAll(type: 'MOVIE' | 'TVSHOW'): Promise<MovieTv[]>;
  getById(id: string): Promise<MovieTv | null>;
}
