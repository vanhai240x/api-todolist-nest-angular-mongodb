import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { StatusTodo } from 'src/schemas/status-todo.schema';
import { Todo } from 'src/schemas/todo.schema';
import { TodoService } from 'src/services/todo.service';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createTodo(@Res() response, @Body() todo: Todo) {
    const newTodo = await this.todoService.create(todo);
    return response.status(HttpStatus.CREATED).json({
      newTodo,
    });
  }

  @ApiOkResponse({
    description: 'todo list',
    type: Todo,
    isArray: true,
  })
  @Get()
  async fetchAll(@Res() response) {
    const todos = await this.todoService.readAll();
    return response.status(HttpStatus.OK).json({
      todos,
    });
  }

  @ApiOkResponse({
    description: 'todo status list',
    type: StatusTodo,
    isArray: true,
  })
  @Get('/status')
  async fetchStatusList(@Res() response) {
    const status = await this.todoService.readStatus();
    return response.status(HttpStatus.OK).json({
      status,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id: string) {
    const todo = await this.todoService.readById(id);
    return response.status(HttpStatus.OK).json({
      todo,
    });
  }

  @Put('/:id')
  async update(@Res() response, @Param('id') id: string, @Body() todo: Todo) {
    const updatedTodo = await this.todoService.update(id, todo);
    return response.status(HttpStatus.OK).json({
      updatedTodo,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id: string) {
    const deletedTodo = await this.todoService.delete(id);
    return response.status(HttpStatus.OK).json({
      deletedTodo,
    });
  }
}
