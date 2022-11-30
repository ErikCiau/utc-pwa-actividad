
function generateId(): number {
    return Math.ceil(Math.random() * new Date().getTime())
}

export class ToDo {
    private constructor(
        public id: number,
        public title: string,
        public body: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) { }

    static create(title: string, body: string) {
        return new ToDo(generateId(), title, body, new Date(), new Date())
    }

    static update(reference: ToDo, title?: string, body?: string) {
        return new ToDo(reference.id, title ?? reference.title, body ?? reference.body, reference.createdAt, new Date())
    }

    static prepare(todo: ToDo) {
        return new ToDo(todo.id, todo.title, todo.body, todo.createdAt, todo.updatedAt)
    }

}
