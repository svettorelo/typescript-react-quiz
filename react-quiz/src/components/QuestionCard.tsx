import React from "react";
import {AnswerObject} from "../App";
import {Wrapper,ButtonWrapper} from "./QuestionCard.styles";

type QCProps = {
    question:string;
    answers: string[];
    callback:(ev: React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer:AnswerObject | undefined;
    questionNumber:number;
    totalQuestions:number;
}

const QuestionCard:React.FC<QCProps> = ({question,answers,callback,userAnswer,questionNumber,totalQuestions}) => {
    return (
        <Wrapper>
            Question Card
            <p className="number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}}/>
            <div>
                {answers.map((ans,index) => (
                    <ButtonWrapper userClicked={userAnswer?.answer===ans} correct={userAnswer?.correctAnswer===ans} key={index}>
                        <button disabled={!!userAnswer} value={ans} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html:ans}}/>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>

        </Wrapper>)
}
export default QuestionCard;