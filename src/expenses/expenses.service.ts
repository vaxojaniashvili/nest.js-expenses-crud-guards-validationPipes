import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExpensesDto } from './dtos/Expenses.dtos';

@Injectable()
export class ExpensesService {
  private readonly data = [];
  getExpenses() {
    if (this.data.length < 1) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      return this.data;
    }
  }
  getExpenseById(id: ExpensesDto) {
    const findUser = this.data.find((u) => u.id === id);
    if (!findUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      return findUser;
    }
  }
  addExpenses(body: ExpensesDto) {
    const { title, description, price } = body;
    const newUser = {
      id: this.data.length + 1,
      title,
      description,
      price,
      timeToBuy: new Date().toLocaleString(),
    };
    if (!body) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      this.data.push(newUser);
      return newUser;
    }
  }
}
