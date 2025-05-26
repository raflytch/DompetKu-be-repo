import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome() {
    return [
      {
        app: 'DompetKu API',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      },
      {
        environment: process.env.NODE_ENV || 'development',
        status: 'online',
        features: ['transactions', 'categories', 'user-management'],
      },
    ];
  }
}
