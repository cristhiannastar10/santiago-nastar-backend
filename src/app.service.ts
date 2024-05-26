import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {name:"test", title:"hola mundo"};
  }
}
