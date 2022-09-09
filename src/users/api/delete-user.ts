import { ApiProperty } from '@nestjs/swagger';

export class deleteUser {
  @ApiProperty({
    example: 'Id do usuário - strig',
    description: 'Inserir o id que deseja excluir',
  })  
  _id?: string;
}
