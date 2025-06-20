import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsBoolean } from "class-validator";

export class CreateLoanDto{
    @ApiProperty({ description: "User Id who realice a loan"})
    @IsInt()
    userId: number

    @ApiProperty({ description: "Book Id of Book"})
    @IsInt()
    bookId: number

    @ApiProperty({ description: "Book Status"})
    @IsBoolean()
    returned: boolean

}