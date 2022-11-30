import { Component, EventEmitter, Input, Output } from "@angular/core";

export type CardEvent = 'TERMINATED' | 'DELETED'

@Component({
    selector: 'app-todo-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input()
    public title!: string
    @Input()
    public body!: string

    @Output()
    public terminatedEvent: EventEmitter<CardEvent> = new EventEmitter<CardEvent>()

    onTerminated() {
        this.terminatedEvent.emit('TERMINATED')
    }

    onDeleted() {
        this.terminatedEvent.emit('DELETED')
    }
}