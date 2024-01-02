export class Subject {
    constructor(public id?: number, public title?: string, public parent?: { id: number, title: string }, public children?: { id: number, title: string }[]) {

    }
}