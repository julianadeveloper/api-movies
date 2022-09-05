/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from '../../auth/auth.service';
import { UsersController } from '../controller/users.controller';
import { UserSchema } from '../schema/user-schema';
import { UsersService } from '../services/users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]) ],
  controllers: [UsersController],
  providers: [UsersService  ],
  exports: [UsersService],

})
export class UsersModule {}
