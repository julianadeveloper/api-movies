
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userSessions } from '../entitys/session-entity';

@Injectable()
export class SessionsService {
  constructor(@InjectModel('userSessions') private readonly sessionModel: Model<userSessions>) {}


  async sessionUser(idSession: userSessions): Promise<userSessions>{
    return await this.sessionModel.findOne(idSession)
  }
}
