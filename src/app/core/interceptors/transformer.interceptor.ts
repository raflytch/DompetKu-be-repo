import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebResponse } from '../interfaces/web.interface';

@Injectable()
export class TransformerInterceptor<T>
  implements NestInterceptor<T, WebResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<WebResponse<T>> {
    return next.handle().pipe(
      map(
        (data): WebResponse<T> => ({
          status: 'success',
          message: 'Operation successful',
          data: data || (null as unknown as T),
        }),
      ),
    );
  }
}
