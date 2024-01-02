import { Assignment } from "./Assignment";
import { Validation } from "./Validation";

export class Reponse {
    id: number;
    played: number;
    assignQuiz: Assignment;
    validation: Validation;

    constructor() {
        this.id = 0;
        this.played = 0;
        this.assignQuiz = new Assignment();
        this.validation = new Validation();
    }
}
