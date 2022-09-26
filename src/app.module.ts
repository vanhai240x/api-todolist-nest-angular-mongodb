import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './controllers/todo.controller';
import { StatusTodo, StatusTodoSchema } from './schemas/status-todo.schema';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { TodoService } from './services/todo.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/todo-list?directConnection=true',
    ),
    MongooseModule.forFeature([
      { name: Todo.name, schema: TodoSchema },
      { name: StatusTodo.name, schema: StatusTodoSchema },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
