import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesDto } from './dtos/Expenses.dtos';
import { ExpenseGuard } from './expenses.guard';
import { ApiKeyGuard } from './api-key.guard';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}
  @UseGuards(ApiKeyGuard)
  @Get()
  GetExpenses() {
    const expensesData = this.expensesService.getExpenses();
    if (expensesData) {
      return expensesData;
    } else {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    }
  }

  @Get('/:id')
  getExpenseById(@Param('id', ParseIntPipe) id) {
    const expenseById = this.expensesService.getExpenseById(id);
    if (expenseById) {
      return expenseById;
    } else {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    }
  }
  @UseGuards(ExpenseGuard)
  @Post('/add')
  addExpenses(@Body() body: ExpensesDto) {
    const addExpenses = this.expensesService.addExpenses(body);
    if (addExpenses) {
      return addExpenses;
    } else {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    }
  }
  @UseGuards(ExpenseGuard)
  @Put('/update/:id')
  updateExpense(@Param('id', ParseIntPipe) id, @Body() body: ExpensesDto) {
    const updateExpense = this.expensesService.updateExpense(id, body);
    if (updateExpense) {
      return updateExpense;
    } else {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    }
  }
  @UseGuards(ExpenseGuard)
  @Delete('/delete/:id')
  deleteExpense(@Param('id', ParseIntPipe) id) {
    const deleteExpense = this.expensesService.deleteExpense(id);
    if (deleteExpense) {
      return deleteExpense;
    } else {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    }
  }
}
