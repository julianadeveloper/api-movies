import { MoviesModule } from './movies/modules/movies.module';
import { TheatersModule } from './theaters/modules/theaters.module';
import { SessionsModule } from './sessions/modules/sessions.module';
import { CommentsModule } from './comments/modules/comments.module';
import { UsersModule } from './users/modules/users.module';
import { SessionsService } from './sessions/services/sessions.service';
import { MoviesService } from './movies/services/movies.service';
import { CommentsService } from './comments/services/comments.service';
import { TheatersService } from './theaters/services/theaters.service';
import { UsersService } from './users/services/users.service';
import { CommentsController } from './comments/controller/comments.controller';
import { TheatersController } from './theaters/controller/theaters.controller';
import { UsersController } from './users/controller/users.controller';
import { SessionsController } from './sessions/controller/sessions.controller';
import { MoviesController } from './movies/controllers/movies.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }), 
      UsersModule,
      CommentsModule,
      TheatersModule,
      MoviesModule,
      SessionsModule,
      SessionsModule

  ],
  controllers: [

    AppController,
  ],
  providers: [

    AppService,
  ]
})
export class AppModule {}
