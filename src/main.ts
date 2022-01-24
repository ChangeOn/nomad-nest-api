import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function showbox() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 유효하지 않은 속성 제거(데코레이터X)
      forbidNonWhitelisted: true, // 유효하지 않은 속성 제외하는 대신 에러발생(whitelist:true일 때 사용하는 옵션)
      transform: true,
    }),
  );
  await app.listen(3000);
}
showbox();
