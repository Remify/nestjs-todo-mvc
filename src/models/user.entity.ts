import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Todo } from 'models/todo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  login: string;

  @Column({ length: 200 })
  password: string;

  @OneToMany(type => Todo, todo => todo.author)
  todos: Todo[];
}