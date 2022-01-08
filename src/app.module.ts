import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';

// decorator~ 클래스에 함수기능을 추가할 수 있다. 클래스 위 함수.
@Module({
  imports: [],
  controllers: [BooksController], // = nodejs의 router. url을 가져와서 함수 실행
  providers: [],
})
export class AppModule {}
