import { ApiProperty } from '@nestjs/swagger';

export class findComment {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  movie_id: string;
}
