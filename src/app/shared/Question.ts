import { Subject } from "./Subject";
import { Level } from "./Levels";
import { Media } from "./Media";

export class Question {
    constructor(public id?: number, public answerNumber?: number, public answerCorrectNumber?: number, public text?: string, public type?: string, public scorePoints?: number, public level?: Level, public subject?: Subject, public medias?: Media[]) {

    }
}