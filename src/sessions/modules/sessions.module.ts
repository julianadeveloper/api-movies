/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SessionsController } from '../controller/sessions.controller';
import { SessionsService } from '../services/sessions.service';

@Module({
  imports: [],
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsModule {}
