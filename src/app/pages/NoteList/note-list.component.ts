import { Component, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";
import { ToDo } from "src/app/core/models/todo.model";
import { TodoService } from "src/app/core/services/todos.services";
import { CardEvent } from "src/app/shared/components/card/card.component";

@Component({
    selector: 'app-notes-list',
    templateUrl: './note-list.component.html',
    styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit, OnDestroy {
    constructor(
        private todoService: TodoService
    ) { }

    private notificationPermisson: boolean = false

    private unsubcriber: Subject<void> = new Subject<void>()

    ngOnInit(): void {
        this.todoService.$todos.pipe(
            takeUntil(this.unsubcriber)
        ).subscribe(todos => {
            console.log(todos)
        })

        if (!!('Notification' in window)) {
            Notification.requestPermission()
                .then(result => {
                    this.notificationPermisson = result === "granted"
                })
        }

    }
    ngOnDestroy(): void {
        this.unsubcriber.next()
        this.unsubcriber.complete()
    }

    onButtonEvent(e: CardEvent) {
        if (this.notificationPermisson) {
            if (e === "DELETED") {
                this.notifyOnDeleted()
            } else {
                this.notifyOnTerminated()
            }
        }
    }


    notifyOnDeleted() {
        navigator.serviceWorker.ready.then(sw => {
            sw.showNotification("Elemento borrado").then(event => {
                console.log(event)
            })
        })
    }

    notifyOnTerminated() {
        navigator.serviceWorker.ready.then(sw => {
            sw.showNotification("Elemento terminado").then(event => {
                console.log(event)
            })
        })
    }

}