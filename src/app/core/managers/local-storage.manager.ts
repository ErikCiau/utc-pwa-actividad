import { Manager } from "../contracts/manager.contract";
import { ToDo } from "../models/todo.model";

const TODO_KEY = "todos"

export class LocalStorageManager implements Manager {

    private todos: ToDo[] = []

    private constructor() {
        this.prepareConnection()
    }

    static shared = new LocalStorageManager()

    private prepareConnection() {
        const todoDB = localStorage.getItem(TODO_KEY)
        if (!todoDB) {
            localStorage.setItem(TODO_KEY, JSON.stringify([]))
        } else {
            this.todos = (JSON.parse(todoDB) as any[]).map(ToDo.prepare)
        }
    }

    getOne(todoId: number): ToDo {
        const todo = this.todos.find(todo => todo.id === todoId)
        if (!todo) throw new Error("todo not exist")

        return todo
    }
    getAll(): ToDo[] {
        return this.todos
    }
    save(todo: ToDo): void {
        this.todos.push(todo)
        this.updateContext()
    }
    update(todoUpdated: ToDo): void {
        this.todos = this.todos.map(todo => {
            if (todo.id === todoUpdated.id) {
                return todoUpdated
            }
            return todo
        })
        this.updateContext()
    }

    private updateContext() {
        localStorage.setItem(TODO_KEY, JSON.stringify(this.todos))
    }
}