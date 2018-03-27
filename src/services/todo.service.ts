import { Todo } from 'models/todo.entity';

import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Component()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) { }

    async findOne(id: number): Promise<Todo>{
        return await this.todoRepository.findOneById(id);
    }

    async findAll(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async create(todo: Todo): Promise<Todo> {
        return await this.todoRepository.save(todo);
    }

    async delete(id: number): Promise<void> {
       return this.todoRepository.deleteById(id);
    }

    async update(id: number, changes: any ): Promise<void> {
        return this.todoRepository.updateById(id, changes);
    } 

}