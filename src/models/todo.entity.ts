import { User } from 'models/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  completed: boolean;

  @Column({ length: 200 })
  title: string;

  @ManyToOne(type => User, user => user.todos)
  author: User;
  
}