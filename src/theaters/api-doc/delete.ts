import { ApiProperty } from '@nestjs/swagger';

export class DeleteTheater {
  @ApiProperty({
    example: 'Id do usuário',
    description: 'Inserir o id que deseja excluir',
  })  
  _id?: String;
}
