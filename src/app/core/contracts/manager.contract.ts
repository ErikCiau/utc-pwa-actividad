import { ToDo } from "../models/todo.model";

export interface Manager {
    getOne(todoId: number): ToDo
    getAll(): ToDo[]
    save(todo: ToDo): void
    update(todoUpdated: ToDo): void
}