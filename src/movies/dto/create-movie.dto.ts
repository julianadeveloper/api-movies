import { IsNotEmpty } from "class-validator";

export class createMoviesDto {
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


}