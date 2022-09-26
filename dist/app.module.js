"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const todo_controller_1 = require("./controllers/todo.controller");
const status_todo_schema_1 = require("./schemas/status-todo.schema");
const todo_schema_1 = require("./schemas/todo.schema");
const todo_service_1 = require("./services/todo.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://vanhai240x:2Adgjmptw@cluster0.glihtj4.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([
                { name: todo_schema_1.Todo.name, schema: todo_schema_1.TodoSchema },
                { name: status_todo_schema_1.StatusTodo.name, schema: status_todo_schema_1.StatusTodoSchema },
            ]),
        ],
        controllers: [todo_controller_1.TodoController],
        providers: [todo_service_1.TodoService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map