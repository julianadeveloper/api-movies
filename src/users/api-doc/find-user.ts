import { ApiProperty } from '@nestjs/swagger';

export class findUser {
  @ApiProperty({ description: 'Inserir o id que deseja buscar' })
  _id?: string;
  email?: string;
}
