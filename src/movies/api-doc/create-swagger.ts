import { ApiProperty } from '@nestjs/swagger';

export class MoviesCreateApi {
  @ApiProperty({
    example: 'User ID',
    description: 'Id do usuário que será buscado',
  })
  _id?: string;

  @ApiProperty()
  plot: string;
  @ApiProperty()
  genres: [string];
  @ApiProperty()
  runtime: number;
  @ApiProperty()
  cast: [string];
  @ApiProperty()
  poster: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  fullplot: string;
  @ApiProperty()
  languages: [string];
  @ApiProperty()
  released: string;
  @ApiProperty()
  directors: [string];
  @ApiProperty()
  rated: string;
  @ApiProperty()
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  @ApiProperty()
  lastupdated: string;
  @ApiProperty()
  metacritic: number;
  @ApiProperty()
  num_mflix_comments: number;
  @ApiProperty()
  year: number;
  @ApiProperty()
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  @ApiProperty()
  countries: [string];
  @ApiProperty()
  type: string;
  @ApiProperty()
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
    };
    fresh: number;
  };
  @ApiProperty()
 
  @ApiProperty()
  dvd: string;
  @ApiProperty()
  fresh: number;
  @ApiProperty()
  production: string;
  @ApiProperty()
  rotten: number;
  @ApiProperty()
  lastupdate: string;
  @ApiProperty()
  website: string;
  @ApiProperty()
  writers: [string];
}
