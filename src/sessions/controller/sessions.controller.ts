import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SessionsEntity } from '../entitys/session-entity';
import { SessionsService } from '../services/sessions.service';

@ApiTags('Sessions')
@ApiBearerAuth('JWT-auth')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionService: SessionsService) {}

  @Get()
  async listSessions(user_id: SessionsEntity): Promise<SessionsEntity[]> {
    return await this.sessionService.sessionUser(user_id);
  }

  @Post()
  async createSession(
    @Body() session: SessionsEntity,
  ): Promise<SessionsEntity> {
    return await this.sessionService.creteSessionId(session);
  }
}
