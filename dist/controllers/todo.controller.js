"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const status_todo_schema_1 = require("../schemas/status-todo.schema");
const todo_schema_1 = require("../schemas/todo.schema");
const todo_service_1 = require("../services/todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async createTodo(response, todo) {
        const newTodo = await this.todoService.create(todo);
        return response.status(common_1.HttpStatus.CREATED).json({
            newTodo,
        });
    }
    async fetchAll(response) {
        const todos = await this.todoService.readAll();
        return response.status(common_1.HttpStatus.OK).json({
            todos,
        });
    }
    async fetchStatusList(response) {
        const status = await this.todoService.readStatus();
        return response.status(common_1.HttpStatus.OK).json({
            status,
        });
    }
    async findById(response, id) {
        const todo = await this.todoService.readById(id);
        return response.status(common_1.HttpStatus.OK).json({
            todo,
        });
    }
    async update(response, id, todo) {
        const updatedTodo = await this.todoService.update(id, todo);
        return response.status(common_1.HttpStatus.OK).json({
            updatedTodo,
        });
    }
    async delete(response, id) {
        const deletedTodo = await this.todoService.delete(id);
        return response.status(common_1.HttpStatus.OK).json({
            deletedTodo,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, todo_schema_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        description: 'todo list',
        type: todo_schema_1.Todo,
        isArray: true,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "fetchAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        description: 'todo status list',
        type: status_todo_schema_1.StatusTodo,
        isArray: true,
    }),
    (0, common_1.Get)('/status'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "fetchStatusList", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, todo_schema_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "delete", null);
TodoController = __decorate([
    (0, swagger_1.ApiTags)('todos'),
    (0, common_1.Controller)('todos'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map