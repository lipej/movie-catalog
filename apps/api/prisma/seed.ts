import { PrismaClient, Types } from '@prisma/client';
import movies from './seeds/movies.json';
import tvshows from './seeds/tvshows.json';

const prisma = new PrismaClient();

async function main() {
  await prisma.movieShow.createMany({
    data: [
      ...movies.map((movie) => ({
        director: movie.Director,
        poster: movie.Poster,
        duration: movie.Runtime,
        originalTitle: movie.Title,
        resume: movie.Plot,
        title: movie.BRTitle,
        type: 'MOVIE' as Types,
        year: movie.Year,
        awards: movie.Awards,
        cast: movie.Actors.split(','),
        rating: movie.Ratings.map((rating) => `${rating.Source}: ${rating.Value}`),
        tags: movie.Genre.split(',')
      })),
      ...tvshows.map((tv) => ({
        director: tv.Director,
        poster: tv.Poster,
        duration: tv.Runtime,
        originalTitle: tv.Title,
        resume: tv.Plot,
        title: tv.BRTitle,
        type: 'TVSHOW' as Types,
        year: tv.Year,
        awards: tv.Awards,
        cast: tv.Actors.split(','),
        rating: tv.Ratings.map((rating) => `${rating.Source}: ${rating.Value}`),
        tags: tv.Genre.split(',')
      }))
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
