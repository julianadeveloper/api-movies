/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';
import { Sessions } from '../entitys/session-entity';
import { SessionsService } from '../services/sessions.service';

@Controller('sessions') 
export class SessionsController {

  constructor(private readonly sessionService: SessionsService){}

  @Get()
  async listSessions(user_id: Sessions): Promise<Sessions[]>{
    return await this.sessionService.sessionUser(user_id)
  }

  @Post()
  async createSession( session: Object): Promise<Sessions>{
    return await this.sessionService.creteSessionId(session);
  }
}
