import { Question } from "./Question";
import { TypeMedia } from "./enum/TypeMedia";

export class Media {
    constructor(public id?:  number, public link?: String, public type?: TypeMedia, public question?:Question) {}
}