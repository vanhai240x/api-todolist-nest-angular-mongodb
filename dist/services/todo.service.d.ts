import { Model } from 'mongoose';
import { StatusTodo, StatusTodoDocument } from 'src/schemas/status-todo.schema';
import { Todo, TodoDocument } from 'src/schemas/todo.schema';
export declare class TodoService {
    private todoModel;
    private StatusTodoModel;
    constructor(todoModel: Model<TodoDocument>, StatusTodoModel: Model<StatusTodoDocument>);
    create(todo: Todo): Promise<Todo>;
    readAll(): Promise<Todo[]>;
    readStatus(): Promise<StatusTodo[]>;
    readById(id: any): Promise<Todo>;
    update(id: any, todo: Todo): Promise<Todo>;
    delete(id: any): Promise<any>;
}
