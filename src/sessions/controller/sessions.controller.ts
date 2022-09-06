import { Body, Controller, Get, Post } from '@nestjs/common';
import { SessionsEntity } from '../entitys/session-entity';
import { SessionsService } from '../services/sessions.service';

@Controller('sessions') 
export class SessionsController {

  constructor(private readonly sessionService: SessionsService){}

  @Get()
  async listSessions(user_id: SessionsEntity): Promise<SessionsEntity[]>{
    return await this.sessionService.sessionUser(user_id)
  }

  @Post()
  async createSession(@Body() session: SessionsEntity): Promise<SessionsEntity>{

    return await this.sessionService.creteSessionId(session);
  }
}
