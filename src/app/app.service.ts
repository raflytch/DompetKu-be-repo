import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Return welcome message with status and timestamp
  getWelcome(): { message: string; status: string; timestamp: string } {
    return {
      message: 'Welcome to DompetKu API',
      status: 'success',
      timestamp: new Date().toISOString(),
    };
  }
}
