import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class ApiKeyGuard implements CanActivate {
  private readonly apiKeyValue = '5511442233';
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['api-key'];
    if (this.apiKeyValue === apiKey) {
      return true;
    } else {
      return false;
    }
  }
}
