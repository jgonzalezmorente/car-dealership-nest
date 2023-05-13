import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina las propiedades que no esté en el DTO
      forbidNonWhitelisted: true, // No deja pasar propiedades que no esté en el DTO
    })
  );

  await app.listen(3000);
}
bootstrap();
