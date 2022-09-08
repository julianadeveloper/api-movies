import { ApiProperty } from '@nestjs/swagger';

export class TheaterDistance {
  @ApiProperty()
  latitude: number;
  @ApiProperty()
  longitude: number;
}
