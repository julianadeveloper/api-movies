import { Module } from '@nestjs/common';
import { SessionsController } from '../controller/sessions.controller';
import { userSessionSchema } from '../schemas/userSession-schema';
import { SessionsService } from '../services/sessions.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Sessions', schema: userSessionSchema }])],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports:[SessionsModule]
})
export class SessionsModule {}
