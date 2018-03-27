import { Todo } from 'models/todo.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

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