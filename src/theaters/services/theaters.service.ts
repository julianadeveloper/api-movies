/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theater } from '../entity/theater-entity';

@Injectable()
export class TheatersService {
  constructor(@InjectModel('Theater') private readonly theaterModel: Model<Theater>) {}


  async getTheaters(theaterList: Theater): Promise<Theater[]> {
    try {
      return await this.theaterModel.find(theaterList);
    } catch (error) {
      new error();
    }
  }
}
