import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatusTodo, StatusTodoDocument } from 'src/schemas/status-todo.schema';
import { Todo, TodoDocument } from 'src/schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<TodoDocument>,
    @InjectModel(StatusTodo.name)
    private StatusTodoModel: Model<StatusTodoDocument>,
  ) {}

  async create(todo: Todo): Promise<Todo> {
    const newTodo = new this.todoModel(todo);
    newTodo.status = (
      await this.StatusTodoModel.findById(todo.statusId).exec()
    ).title;
    return newTodo.save();
  }

  async readAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }

  async readStatus(): Promise<StatusTodo[]> {
    return await this.StatusTodoModel.find().exec();
  }

  async readById(id): Promise<Todo> {
    return await this.todoModel.findById(id).exec();
  }

  async update(id, todo: Todo): Promise<Todo> {
    todo.status = (
      await this.StatusTodoModel.findById(todo.statusId).exec()
    ).title;
    return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.todoModel.findByIdAndRemove(id);
  }
}
