import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public-decorators';
import { loginUserDto } from './dto/users/login-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guards';
import { AuthRequest } from './models/auth-request';
@ApiTags('Auth')
@ApiBearerAuth('JWT-auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: loginUserDto })
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
