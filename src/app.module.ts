import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './controllers/todo.controller';
import { StatusTodo, StatusTodoSchema } from './schemas/status-todo.schema';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { TodoService } from './services/todo.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vanhai240x:2Adgjmptw@cluster0.glihtj4.mongodb.net/?retryWrites=true&w=majority',
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
