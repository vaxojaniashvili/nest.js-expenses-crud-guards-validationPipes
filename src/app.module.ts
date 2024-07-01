import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { APP_GUARD } from '@nestjs/core';
import { ExpenseGuard } from './expenses/expenses.guard';
import { ApiKeyGuard } from './expenses/api-key.guard';
import { LoggerMiddleware } from './expenses/logger.middleware';

@Module({
  imports: [ExpensesModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard || ExpenseGuard,
    },
  ],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '/expenses', method: RequestMethod.GET });
  }
}
