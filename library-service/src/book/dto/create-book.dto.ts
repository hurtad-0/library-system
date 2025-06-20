import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ description: "Book's title", example: "Clean Code"})
  @IsString()
  title: string;

  @ApiProperty({ description: "Book's author", example: "Robet C. Martin" })
  @IsString()
  author: string;

  @ApiProperty({description: "Book's Status", example: true, required: false})
  @IsBoolean()
  @IsOptional()
  available?: boolean;
}