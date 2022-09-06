import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SessionsEntity } from '../entitys/session-entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel('Sessions')
    private readonly sessionModel: Model<SessionsEntity>,
  ) {}

  async sessionUser(idSession: SessionsEntity): Promise<SessionsEntity[]> {
    return await this.sessionModel.find(idSession);
  }

  async creteSessionId(session: SessionsEntity): Promise<SessionsEntity> {
    return await this.sessionModel.create(session);
  }

  async update(session: SessionsEntity): Promise<SessionsEntity> {
    return await this.sessionModel.findOneAndUpdate(session);
  }
}
