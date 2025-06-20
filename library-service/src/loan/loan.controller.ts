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
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'

@ApiTags('Loans')
@Controller('loans')
export class LoanController {
    constructor(private readonly loanService: LoanService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Book Loan' })
    @ApiResponse({ status: 201, description: 'The loan was created succesfully' })
    create(@Body() createLoanDto: CreateLoanDto) {
        return this.loanService.create(createLoanDto);
    }

    @Get()
    @ApiOperation({ summary: 'Obtain all Loans' })
    @ApiResponse({ status: 200, description: 'Loans List' })
    findAll() {
        return this.loanService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtain a specific Loan' })
    @ApiResponse({ status: 200, description: 'Loan found' })
    find(@Param(':id', ParseIntPipe) id: number) {
        return this.loanService.findOne(+id)
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update the information of the loan' })
    @ApiResponse({ status: 200, description: 'Loan was updated succesfully' })
    update(
        @Param(':id', ParseIntPipe) id: number,
        @Body() updateLoanDto: UpdateLoanDto,
    ) {
        return this.loanService.update(+id, updateLoanDto)
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a Loan' })
    @ApiResponse({ status: 200, description: 'Loan was deleted succesfully' })
    remove(@Param(':id', ParseIntPipe) id: number){
        return this.loanService.remove(+id)
    }
}
