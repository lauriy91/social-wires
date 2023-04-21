/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TypeORMExceptionFilter } from './app/common/typeorm-exceptions.filter';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new TypeORMExceptionFilter());
  const options = new DocumentBuilder()
    .setTitle('Nest Workshop')
    .setDescription('Nest Workshop')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
