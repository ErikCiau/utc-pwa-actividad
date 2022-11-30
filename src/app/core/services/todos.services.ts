import { Injectable } from "@angular/core";
import { LocalStorageManager } from "../managers/local-storage.manager";
import { BehaviorSubject, Subject } from 'rxjs'
import { ToDo } from "../models/todo.model";

@Injectable({ providedIn: 'root' })
export class TodoService {
    private manager = LocalStorageManager.shared
    $todos: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>(this.manager.getAll())

    createTodo(todo: ToDo) {
        this.manager.save(todo)
        this.$todos.next(this.manager.getAll())
    }



}