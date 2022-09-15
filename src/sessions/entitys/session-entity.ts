import { ApiProperty } from "@nestjs/swagger";

export class SessionsEntity{
  @ApiProperty({description: "Id da sessão registrada no banco"})
  _id?: string;
  user_id: string;
  jwt: string;
}