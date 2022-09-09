import { ApiProperty } from "@nestjs/swagger";

export class findUser{
  @ApiProperty({example: "Id do usuário", description: "Inserir o id que deseja buscar"})
 _id?: string;
}