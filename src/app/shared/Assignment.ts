import { Quiz } from "./Quiz";
import { Student } from "./Student";
import { Reponse } from "./Reponse";

export class Assignment {
    id: number;
    date_debut: string;
    date_fin: string;
    raison: string;
    score: number;
    attempt_number: number;
    score_final: number;
    quiz: Quiz;
    student: Student;
    students: Student[];
    reponseList: Reponse[];

    constructor() {
        this.id = 0;
        this.date_debut = '';
        this.date_fin = '';
        this.raison = '';
        this.score = 0;
        this.attempt_number = 0;
        this.score_final = 0;
        this.quiz = new Quiz();
        this.student = new Student();
        this.students = [];
        this.reponseList = [];
    }
}
