
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sessions } from '../entitys/session-entity';

@Injectable()
export class SessionsService {
  constructor(@InjectModel('Sessions') private readonly sessionModel: Model<Sessions>) {}


  async sessionUser(idSession: Sessions): Promise<Sessions[]>{
    console.log(idSession)
    return await this.sessionModel.find(idSession)
  }
}
