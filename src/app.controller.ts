import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/prueba')
  getHello(): object {
    return this.appService.getHello();
  }
}
