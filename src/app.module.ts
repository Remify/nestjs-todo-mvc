import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { TodoService } from './services/todo.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'models/user.entity';
import { Todo } from 'models/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: __dirname + '/../db/db.db',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Todo])
  ],
  controllers: [AppController, UserController],
  components: [TodoService, UserService],
})
export class AppModule {}
