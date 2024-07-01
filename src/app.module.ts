import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { APP_GUARD } from '@nestjs/core';
import { ExpenseGuard } from './expenses/expenses.guard';
import { ApiKeyGuard } from './expenses/api-key.guard';

@Module({
  imports: [ExpensesModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
  ],
  controllers: [],
})
export class AppModule {}
