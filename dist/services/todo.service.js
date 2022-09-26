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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const status_todo_schema_1 = require("../schemas/status-todo.schema");
const todo_schema_1 = require("../schemas/todo.schema");
let TodoService = class TodoService {
    constructor(todoModel, StatusTodoModel) {
        this.todoModel = todoModel;
        this.StatusTodoModel = StatusTodoModel;
    }
    async create(todo) {
        const newTodo = new this.todoModel(todo);
        newTodo.status = (await this.StatusTodoModel.findById(todo.statusId).exec()).title;
        return newTodo.save();
    }
    async readAll() {
        return await this.todoModel.find().exec();
    }
    async readStatus() {
        return await this.StatusTodoModel.find().exec();
    }
    async readById(id) {
        return await this.todoModel.findById(id).exec();
    }
    async update(id, todo) {
        todo.status = (await this.StatusTodoModel.findById(todo.statusId).exec()).title;
        return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
    }
    async delete(id) {
        return await this.todoModel.findByIdAndRemove(id);
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(todo_schema_1.Todo.name)),
    __param(1, (0, mongoose_1.InjectModel)(status_todo_schema_1.StatusTodo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map