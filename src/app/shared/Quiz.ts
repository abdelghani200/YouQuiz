import { Teacher } from "./Teacher";

export class Quiz {

    constructor(public id?: number, public title?: String, public start_Date?:
        Date, public end_Date?: Date, public successScore?: String,
        public viewAnswer?: Boolean, public maxAttempts?: number,
        public remarks?: String, public instructions?: String, public teacher?: Teacher) {

    }

}