import { Todo } from 'models/todo.entity';
import { UserService } from './services/user.service';
import { Get, Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { TodoService } from 'services/todo.service';
import { Connection } from 'typeorm';

@Controller('api/todos')
export class AppController {

  constructor(private todoService: TodoService, private userService: UserService) {

  }

  @Get()
  root(): any {
    return this.todoService.findAll()
  }

  
  @Put()
  async new(@Body() todo: Todo): Promise<Todo> {

    todo.author = null;
    return this.todoService.create(todo);
  }

  @Post()
  async update(@Body() todo: Todo): Promise<Todo> {

    const changes = { completed: null, title: null };
    changes.completed = todo.completed;
    changes.title = todo.title;

    await this.todoService.update(todo.id, changes);

    return { ...changes, ...todo};
  }

  @Delete(':id')
  async delete(@Param() params) {
    return this.todoService.delete(params.id);
  }

  @Get('/:id')
  async get(@Param() params) {
    return this.todoService.findOne(params.id);
  }

}
