import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { sessionDto } from '../dto/session/session.dto';
import { SessionsEntity } from '../entitys/session-entity';
import { SessionsService } from '../services/sessions.service';

@ApiTags('Sessions')
@ApiBearerAuth('JWT-auth')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionService: SessionsService) {}
@ApiBody({type: SessionsEntity})
  @Get()
  async listSessions(user_id: SessionsEntity): Promise<SessionsEntity[]> {
    return await this.sessionService.sessionUser(user_id);
  }
  @ApiBody({type: sessionDto})
  @Post()
  async createSession(
    @Body() session: SessionsEntity,
  ): Promise<SessionsEntity> {
    return await this.sessionService.creteSessionId(session);
  }
}
