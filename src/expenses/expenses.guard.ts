import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
@Injectable()
export class ExpensesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const isAdmin = request.headers['is-admin'];
    if (isAdmin) {
      return true;
    } else {
      throw new HttpException('Error', HttpStatus.BAD_REQUEST);
    }
  }
}
