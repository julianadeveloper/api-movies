import { ApiProperty } from "@nestjs/swagger";

export class Movies {
  @ApiProperty({example: "Movie ID", description: "Inserir o ID desejado para a requisição"})
  _id?: string;
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
    },
    critic: {
      rating: number;
      numReviews: number;
      meter: number;
    },
    fresh: number;
  };
  
  dvd: string;
  fresh: number;
  production: string;
  rotten: number;
  lastupdate: string;
  website: string;
  writers: [string];


}
