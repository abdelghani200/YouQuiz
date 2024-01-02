import { Answer } from "./Answer";
import { Question } from "./Question";

export class Validation {
    id: number;
    points: number;
    question: Question;
    answer: Answer;
    reponseList: Response[];

    constructor() {
        this.id = 0;
        this.points = 0;
        this.question = new Question();
        this.answer = new Answer();
        this.reponseList = [];
    }
}