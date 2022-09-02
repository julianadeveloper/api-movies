export class Movies {
  plot: string;
  genres: [string];
  runtime: number;
  cast: [string];
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: string;
  directors: [string];
  rated: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: string;
  metacritic: number;
  num_mflix_comments: number;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [string];
  type: string;
  tomatoes: {
    boxOffice: string;
    consensus: string;
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    fresh: number;
  };
  critic: {
    rating: number;
    numReviews: number;
    meter: number;
  };
  dvd: string;
  fresh: number;
  production: string;
  rotten: number;
  lastupdate: string;
  website: string;
  writers: [string];

  constructor(Movies?: Partial<Movies>) {
    this.plot = Movies?.plot;
    this.genres = Movies?.genres;
    this.runtime = Movies?.runtime;
    this.cast = Movies?.cast;
    this.poster = Movies?.poster;
    this.title = Movies?.title;
    this.fullplot = Movies?.fullplot;
    this.languages = Movies?.languages;
    this.released = Movies?.released;
    this.directors = Movies?.directors;
    this.rated = Movies?.rated;
    this.awards = Movies?.awards;
    this.critic= Movies?.critic;
    this.dvd = Movies?.dvd;
    this.fresh = Movies?.fresh;
    this.production = Movies?.production;
    this.rotten = Movies?.rotten;
    this.lastupdate = Movies?.lastupdate;
    this.website = Movies?.website;
    this.writers = Movies?.writers;
  }
}
