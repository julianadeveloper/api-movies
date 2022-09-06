import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SessionsService } from '../sessions/services/sessions.service';
import { User } from '../users/entitys/user';
import { UsersService } from '../users/services/users.service';
import { loginUserDto } from './dto/users/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    private readonly sessionService: SessionsService,
  ) {}
  async validateUser(email: string, password: string): Promise<loginUserDto> {
    const user = await this.userService.findOne({ email });
    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user.toObject();
      return result;
    }
    throw new UnauthorizedException(
      'Email address or password provided is incorrect.',
    );
  }

  async login(user: User) {
    const payload = {
      sub: user._id,
      email: user.email,
      name: user.name,
    };

    const userSession = {
      user_id: user.email,
      jwt: this.jwtService.sign(payload),
    };
    //     (user.email == userSession.user_id) ?  this.sessionService.update(userSession) :

    const sessao = await this.sessionService.sessionOne(userSession.user_id);

    if (sessao) this.sessionService.update(userSession);
    else this.sessionService.creteSessionId(userSession);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}