/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { TheatersService } from '../services/theaters.service';
import { Theater } from '../entity/theater-entity';
@Controller('theaters')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  @Get()
  async listTheaters(thetater: Theater): Promise<Theater[]> {
    try {
      return await this.theatersService.getTheaters(thetater);
    } catch {
      new Error();
    }
  }

}
