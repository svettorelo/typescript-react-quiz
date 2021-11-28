import {shuffleArray} from "./utils";

export type Question = {
    category:string;
    correct_answer:string;
    type:string;
    question:string;
    incorrect_answers:string[];
}

export type QuestionState = Question & {
    answers:string[];
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export function fetchQuizQuestions(amount:number,difficulty:Difficulty){
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    return fetch(endpoint)
        .then(r => r.json())
        .then(r => r.results.map((q:Question)=>(
            {
                ...q,answers:shuffleArray([...q.incorrect_answers,q.correct_answer])
            }
        )));
}