import React, {useState} from 'react';
import QuestionCard from "./components/QuestionCard";
import {QuestionState,Difficulty, fetchQuizQuestions} from "./API";
import {GlobalStyle,Wrapper} from "./App.styles";

export type AnswerObject ={
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}
const TOTAL_QUESTIONS = 10;

function App() {
  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState<QuestionState[]>([]);
  const [number,setNumber] = useState(0);
  const [userAnswers,setUserAnswers] = useState<AnswerObject[]>([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);

  function startQuiz (){
    setLoading(true);
    setGameOver(false);
    fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY)
        .then(r=> {
          setQuestions(r);
          setScore(0);
          setUserAnswers([]);
          setNumber(0);
          setLoading(false);
        });
  }
  function checkAnswer(ev: React.MouseEvent<HTMLButtonElement>){
    if(!gameOver){
        const answer:string = ev.currentTarget.value;
        const correct:boolean = questions[number].correct_answer===answer;
        if (correct) setScore(score+1);
        const answerObject:AnswerObject = {
            question:questions[number].question,
            answer:answer,
            correct:correct,
            correctAnswer:questions[number].correct_answer
        };
        setUserAnswers([...userAnswers,answerObject]);
    }
  }
  function nextQuestion(){
    const nextQ = number+1;
    nextQ===TOTAL_QUESTIONS?setGameOver(true):setNumber(nextQ);
  }
  return (<>
    <GlobalStyle/>
    <Wrapper>
      <h1>react quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
            <button className="start" onClick={startQuiz}>Start</button> : null}
      {!gameOver?<p className="score">Score: {score}</p>:null}
      {loading?<p>Loading questions...</p>:null}
      {!loading && !gameOver &&
        <QuestionCard questionNumber={number + 1} totalQuestions={TOTAL_QUESTIONS}
                      question={questions[number].question}
                      answers={questions[number].answers}
                      userAnswer={userAnswers ? userAnswers[number] : undefined}
                      callback={checkAnswer}/>
      }
      {!gameOver && !loading && userAnswers.length===number+1 && number!==TOTAL_QUESTIONS-1 &&
        <button className="next" onClick={nextQuestion}>Next question</button>
      }
    </Wrapper></>
  );
}

export default App;
