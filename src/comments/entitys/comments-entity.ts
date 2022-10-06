import { ApiProperty } from '@nestjs/swagger';

export class Comments {
  
  @ApiProperty()
  name: string;
  email: string;
  @ApiProperty()
  movie_id: string;
  text: string;
  date: string;
}
