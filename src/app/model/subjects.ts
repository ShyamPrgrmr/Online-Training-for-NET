import { Question } from "./question";

export interface Subjects{
    id:number;
    name:string;
    list:string[];
    test:Question[];
    practiceQuestions:Question[];
    paper:string;
}