import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { sessionDto } from '../dto/session/session.dto';
import { SessionsEntity } from '../entitys/session-entity';
import { SessionsService } from '../services/sessions.service';

@ApiTags('Sessions')
@ApiBearerAuth('JWT-auth')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionService: SessionsService) {}
  // @ApiBody({type: SessionsEntity})
  @Get()
  async listSessions(sessions: SessionsEntity): Promise<SessionsEntity[]> {
    return await this.sessionService.sessionsUser(sessions);
  }
  // @Get()
  // async listSession(user_id: SessionsEntity): Promise<SessionsEntity[]> {
  //   return await this.sessionService.sessionUser(user_id);
  // }
  @ApiBody({ type: sessionDto })
  @Post()
  async createSession(
    @Body() session: SessionsEntity,
  ): Promise<SessionsEntity> {
    return await this.sessionService.creteSessionId(session);
  }

  @Put(':id')
  async updateToken(@Param(':id') @Body() jwt: SessionsEntity): Promise<void> {
    await this.sessionService.update(jwt);
  }
}
