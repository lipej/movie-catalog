type Params = {
  id: string;
  poster: string;
  title: string;
  originalTitle: string;
  year: string;
  duration: string;
  tags: string[];
  resume: string;
  cast: string[];
  director: string;
  rating: string[];
  awards: string[];
  type: "MOVIE" | "TVSHOW";
};

export class MovieTv {
  readonly id: string;
  readonly poster: string
  readonly title: string;
  readonly originalTitle: string;
  readonly year: string;
  readonly duration: string;
  readonly tags: string[];
  readonly resume: string;
  readonly cast: string[];
  readonly director: string;
  readonly rating: string[];
  readonly awards: string[];
  readonly type: "MOVIE" | "TVSHOW";

  constructor(params: Params) {
    this.id = params.id;
    this.poster = params.poster;
    this.title = params.title;
    this.originalTitle = params.originalTitle;
    this.year = params.year;
    this.duration = params.duration;
    this.tags = params.tags;
    this.resume = params.resume;
    this.cast = params.cast;
    this.director = params.director;
    this.rating = params.rating;
    this.awards = params.awards;
    this.type = params.type;
  }
}
