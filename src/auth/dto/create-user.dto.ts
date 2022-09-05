import { IsNotEmpty } from 'class-validator';

export class createUser {
  @IsNotEmpty({ message: 'Nome de usuário obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'Email obrigatório!' })
  email: string;

  @IsNotEmpty({ message: 'Preencha a senha' })
  password: string;

}
