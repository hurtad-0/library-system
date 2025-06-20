import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto'

@Injectable()
export class LoanService {
    constructor(private prisma: PrismaService) { }

    async create(createLoanDto: CreateLoanDto) {
        const { userId, bookId } = createLoanDto;
        return await this.prisma.loan.create({
            data: {
                user: { connect: { id: userId } },
                book: { connect: { id: bookId } },
                returned: false,
            }
        })
    }

    findAll() {
        return this.prisma.loan.findMany();
    }

    findOne(id: number) {
        return this.prisma.loan.findUnique({ where: { id } });
    }

    async update(id: number, updateLoanDto: UpdateLoanDto) {
        const { returned } = updateLoanDto;
        return await this.prisma.loan.update({
            where: { id },
            data: { returned },
        });
    }

    async remove(id: number) {
        return this.prisma.loan.delete({
            where: { id }
        });
    }

}
