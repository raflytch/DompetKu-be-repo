import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Welcome endpoint
  @Get()
  getWelcome(): { message: string; status: string; timestamp: string } {
    return this.appService.getWelcome();
  }
}
