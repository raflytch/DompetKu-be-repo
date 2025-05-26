import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

interface ErrorResponse {
  message: string | string[];
  [key: string]: unknown;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse() as ErrorResponse;

    let message = 'An error occurred';

    if (
      typeof exceptionResponse === 'object' &&
      exceptionResponse !== null &&
      'message' in exceptionResponse
    ) {
      const errorMessage = exceptionResponse.message;
      message = Array.isArray(errorMessage)
        ? errorMessage[0]
        : String(errorMessage);
    }

    response.status(status).json({
      status: 'error',
      message,
      data: null,
    });
  }
}
