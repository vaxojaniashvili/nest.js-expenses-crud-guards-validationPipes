import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesService {
  private readonly data = [
    {
      id: 1,
      title: 'Iphone 11',
      description: 'This is iphone 11 with 4GB ram and 128GB storage!',
      price: 1500,
      TimeToBuy: new Date().toLocaleString(),
    },
  ];
  getExpenses() {
    if (this.data.length < 1) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      return this.data;
    }
  }
}
