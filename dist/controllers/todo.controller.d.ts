import { Todo } from 'src/schemas/todo.schema';
import { TodoService } from 'src/services/todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(response: any, todo: Todo): Promise<any>;
    fetchAll(response: any): Promise<any>;
    fetchStatusList(response: any): Promise<any>;
    findById(response: any, id: string): Promise<any>;
    update(response: any, id: string, todo: Todo): Promise<any>;
    delete(response: any, id: string): Promise<any>;
}
