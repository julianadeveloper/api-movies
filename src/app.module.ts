import { MoviesModule } from './modules/movies.module';
import { TheatersModule } from './modules/theaters.module';
import { SessionsModule } from './modules/sessions.module';
import { CommentsModule } from './modules/comments.module';
import { UsersModule } from './modules/users.module';
import { SessionsService } from './services/sessions.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MoviesService } from './services/movies.service';
import { CommentsService } from './services/comments.service';
import { TheatersService } from './services/theaters.service';
import { UsersService } from './services/users.service';
import { CommentsController } from './controllers/comments.controller';
import { TheatersController } from './controllers/theaters.controller';
import { UsersController } from './controllers/users.controller';
import { SessionsController } from './controllers/sessions.controller';
import { MoviesController } from './controllers/movies.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(),
    MoviesModule,
    TheatersModule,
    SessionsModule,
    CommentsModule,
    UsersModule,
  ],
  controllers: [
    AuthController,
    CommentsController,
    TheatersController,
    UsersController,
    SessionsController,
    MoviesController,
    AppController,
  ],
  providers: [
    SessionsService,
    AuthService,
    MoviesService,
    CommentsService,
    TheatersService,
    UsersService,
    AppService,
  ],
})
export class AppModule {}
