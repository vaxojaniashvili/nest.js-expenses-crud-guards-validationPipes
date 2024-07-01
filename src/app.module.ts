import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { APP_GUARD } from '@nestjs/core';
import { ExpensesGuard } from './expenses/expenses.guard';

@Module({
  imports: [ExpensesModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ExpensesGuard,
    },
  ],
})
export class AppModule {}
