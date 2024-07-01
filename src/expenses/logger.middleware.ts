import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('Request was made',req["query"]);
    const token = 'TOKEN';
    if (token) {
      return true;
    } else {
      return false;
    }
    next();
  }
}
