require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< Updated upstream

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
=======
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('MOVIES API')
    .setDescription('Essa API utiliza o MONGODB como base de dados de Filmes.')
    .setVersion('1.0')
    .addTag('Movies')
    .addTag('Theaters')
    .addTag('Users')
    .addTag('Auth')
    .addTag('Comments')
    .addTag('Sessions')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  app.enableCors();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
>>>>>>> Stashed changes
  await app.listen(3300);
}
bootstrap();
