import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class createUser {
  @ApiProperty()
  @IsNotEmpty({ message: 'Nome de usuário obrigatório' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Email obrigatório!' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Preencha a senha' })
  password: string;

}
