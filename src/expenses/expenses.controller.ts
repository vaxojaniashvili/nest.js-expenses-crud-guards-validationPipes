import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesDto } from './dtos/Expenses.dtos';

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

  @Get('/:id')
  getExpenseById(@Param('id', ParseIntPipe) id: ExpensesDto) {
    const expenseById = this.expensesService.getExpenseById(id);
    if (expenseById) {
      return expenseById;
    } else {
      throw new HttpException('User not fond', HttpStatus.NOT_FOUND);
    }
  }

  @Post('/add')
  addExpenses(@Body() body: ExpensesDto) {
    const addExpenses = this.expensesService.addExpenses(body);
    if (addExpenses) {
      return addExpenses;
    } else {
      throw new HttpException('User not fond', HttpStatus.NOT_FOUND);
    }
  }
}
