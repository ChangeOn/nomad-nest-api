import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Controller('books') // url entry point
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // Nest는 두 개의 프레임워크 위에서 동시에 돌아감 (express, fastify)
  // 그래서 아래 같은 방법으로 express의 req, res에 접근하는 것은 지양해야함
  // getAll(@Req() req, @Res() res): Book[] {
  // res.json(); ..
  // }

  @Get()
  getAll(): Book[] {
    return this.booksService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a book made after: ${searchingYear}`;
  }

  // Get (:id) 하위에 Get (some url) 하게되면 some url을 id로 인식하기 때문에
  // -> Get (:id) 상단에 위치시킨다
  @Get(':id')
  getOne(@Param('id') bookId: number): Book {
    return this.booksService.getOne(bookId);
  }

  @Post()
  create(@Body() bookData: CreateBookDto) {
    return this.booksService.create(bookData);
  }

  @Delete(':id')
  delete(@Param('id') bookId: number) {
    return this.booksService.deleteOne(bookId);
  }

  @Patch(':id')
  update(@Param('id') bookId: number, @Body() updateData: UpdateBookDto) {
    return this.booksService.update(bookId, updateData);
  }
}
