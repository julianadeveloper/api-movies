/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { userSessions } from '../entitys/session-entity';
import { SessionsService } from '../services/sessions.service';

@Controller('sessions') 
export class SessionsController {

  constructor(private readonly sessionService: SessionsService){}

  @Get()
  async listSessions(idSession: userSessions): Promise<userSessions>{
    return await this.sessionService.sessionUser(idSession)
  }
}
