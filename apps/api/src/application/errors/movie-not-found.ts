export class MovieNotFound extends Error {
  constructor(id: string) {
    super('Movie not found with id: ' + id);
  }
}
