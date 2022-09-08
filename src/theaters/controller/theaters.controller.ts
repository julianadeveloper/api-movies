import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TheatersService } from '../services/theaters.service';
import { Theater } from '../entity/theater-entity';
import { IsPublic } from '../../auth/decorators/is-public-decorators';
import { updateTheater } from '../dto/theater-dto';
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
  @Get('/findTheater')
  async findOne(@Query() query: any): Promise<Theater> {
    try {
      return await this.theatersService.findOne(query);
    } catch (error) {
      throw new Error();
    }
  }
  // @Get('/findDistance/')
  // async find(
  //   @Param(':id'), @Query(), logintude: Theater,
  //   latitude: Theater,
  // ) {
  //   return this.theatersService.buscarproximos(latitude, logintude);
  // }
  @IsPublic()
  @Post()
  async createUser(@Body() teather: Theater): Promise<Theater> {
    try {
      return await this.theatersService.create(teather);
    } catch (error) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }

  @Put(':id')
  async changeUserCredentials(
    @Param('id') id: string,
    @Body() bodyTheater: updateTheater,
  ) {
    try {
      return await this.theatersService.updateTheater(id, bodyTheater);
    } catch (error) {
      throw new HttpException('FORBIDDEN', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    try {
      console.log(id);
      return await this.theatersService.deleteTheater(id);
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
