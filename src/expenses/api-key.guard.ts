import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly api_Key = 'This is api key';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['api-key'];
    if (apiKey === this.api_Key) {
      return true;
    }
    throw new HttpException('error', HttpStatus.BAD_REQUEST);
  }
}
