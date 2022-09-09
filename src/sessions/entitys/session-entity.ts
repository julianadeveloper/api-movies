import { ApiProperty } from "@nestjs/swagger";

export class SessionsEntity{
  @ApiProperty({description: "Id da sessão registrada no banco"})
  _id?: string;
  @ApiProperty({description: "Id do usuário logado"})
  user_id: string;
  jwt: string;
}