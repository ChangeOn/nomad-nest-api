import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('books') // url entry point
export class BooksController {
  @Get()
  getAll() {
    return 'This will return all books';
  }

  @Get('/:id')
  getOne(@Param('id') bookId: string) {
    return `This will return one book with the ID: ${bookId}`;
  }

  @Post()
  create() {
    return 'This will create a book';
  }

  @Delete('/:id')
  delete(@Param('id') bookId: string) {
    return `This will delete a book with the ID: ${bookId}`;
  }

  @Patch('/:id')
  update(@Param('id') bookId: string) {
    return `This will patch a book with the ID: ${bookId}`;
  }
}
