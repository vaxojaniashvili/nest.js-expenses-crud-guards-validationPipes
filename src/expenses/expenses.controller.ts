import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}
  @Get()
  GetExpenses() {
    const expensesData = this.expensesService.getExpenses();
    if (expensesData) {
      return expensesData;
    } else {
      throw new HttpException('User not fond', HttpStatus.NOT_FOUND);
    }
  }
}
