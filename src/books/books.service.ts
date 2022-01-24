import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    console.log(typeof id);
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found.`);
    }
    return book;
  }

  deleteOne(id: number) {
    this.getOne(id);
    console.log(typeof id);

    this.books = this.books.filter((book) => book.id !== id);
  }

  create(bookData: CreateBookDto) {
    this.books.push({
      id: this.books.length + 1,
      ...bookData,
    });
  }

  update(id: number, updateData: UpdateBookDto) {
    console.log(typeof id);

    const book = this.getOne(id);
    this.deleteOne(id);
    this.books.push({ ...book, ...updateData });
  }
}
