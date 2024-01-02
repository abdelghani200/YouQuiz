import { Question } from "./Question";
import { Quiz } from "./Quiz";

export class QuestionToQuiz {

    constructor(public question?: Question, public quiz?: Quiz, public time?: number) {

    }
}