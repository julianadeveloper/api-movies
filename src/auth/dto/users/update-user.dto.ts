import { ApiProperty } from "@nestjs/swagger";

export class updateUser {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
