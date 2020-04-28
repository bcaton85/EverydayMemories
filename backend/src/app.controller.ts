import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  constructor(){}

  @Get('test')
  test(){
    return 'success';
  }
  @Get()
  testRoot(){
    return 'success';
  }

}
