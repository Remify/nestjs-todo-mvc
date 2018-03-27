import { Connection } from 'typeorm';
import { UserService } from './services/user.service';
import { Get, Controller, Post } from '@nestjs/common';

@Controller('api/users')
export class UserController {

    
  constructor(private userService: UserService, private connection: Connection) {
  }


    @Get()
    get(): any {
        return this.userService.findAll()
    }

    @Post()
    register(): void {
        
    }

}
