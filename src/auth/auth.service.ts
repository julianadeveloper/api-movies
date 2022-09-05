import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entitys/user';
import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/user-payload';
import { UserToken } from './models/user-token';
import { SessionsService } from 'src/sessions/services/sessions.service';
import { loginUserDto } from './dto/users/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    private readonly sessionService :SessionsService,
  ) {}

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<loginUserDto> {
    const user = await this.userService.findOne({email});

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedException(
      'Email address or password provided is incorrect.',
    );
  }
}
