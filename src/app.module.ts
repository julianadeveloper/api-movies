import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CommentsModule } from './comments/modules/comments.module';
import { MoviesModule } from './movies/modules/movies.module';
import { SessionsModule } from './sessions/modules/sessions.module';
import { TheatersModule } from './theaters/modules/theaters.module';
import { UsersModule } from './users/modules/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
    CommentsModule,
    TheatersModule,
    MoviesModule,
    SessionsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
