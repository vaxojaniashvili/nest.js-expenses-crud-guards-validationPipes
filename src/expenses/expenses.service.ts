import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataTypes } from 'src/types/common';

@Injectable()
export class ExpensesService {
  private readonly data = [];
  getExpenses() {
    if (this.data.length < 1) {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    } else {
      return this.data;
    }
  }
  getExpenseById(id: DataTypes) {
    const findExpense = this.data.find((u) => u.id === id);
    if (!findExpense) {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    } else {
      return findExpense;
    }
  }
  addExpenses(body: DataTypes) {
    const { title, description, price } = body;
    const newExpense = {
      id: this.data.length + 1,
      title,
      description,
      price,
      timeToBuy: new Date().toLocaleString(),
    };
    if (!body) {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    } else {
      this.data.push(newExpense);
      return newExpense;
    }
  }
  updateExpense(id: DataTypes, body: DataTypes) {
    const { title, description, price } = body;
    const findExpense = this.data.findIndex((u) => u.id === id);
    const updatedUser = {
      id: id,
      title,
      description,
      price,
      timeToUpdate: new Date().toLocaleString(),
    };
    if (!findExpense) {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    } else {
      this.data[findExpense] = updatedUser;
      return updatedUser;
    }
  }
  deleteExpense(id: DataTypes) {
    const findExpense = this.data.findIndex((u) => u.id === id);
    if (!findExpense) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      const removedExpense = this.data.splice(findExpense, 1);
      return removedExpense;
    }
  }
}
