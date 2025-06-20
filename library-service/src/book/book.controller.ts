import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({ status: 201, description: 'The book was created succesfully.' })
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtain all books created' })
  @ApiResponse({ status: 200, description: 'Books List' })
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtain a specific book' })
  @ApiResponse({ status: 200, description: 'Book found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update the information of the book' })
  @ApiResponse({ status: 200, description: 'Book was updated succesfully' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a book' })
  @ApiResponse({ status: 200, description: 'Book was deleted succesfully' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.remove(id);
  }
}