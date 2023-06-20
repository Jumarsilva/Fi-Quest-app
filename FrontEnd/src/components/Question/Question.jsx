import { useContext } from "react";
import { QuizContext } from '../../contexts/Quiz';

import Option from "../Option/Option";


//Estilo
import './Question.css';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const { questions, currentQuestion, score, answerSelected } = quizState;

  
    const onSelectOption = (option)=>{
        dispatch({
            type:"CHECK_ANSWER",
            payload: {answer: currentQuestionData.answer, option}
        })
    };

    
  if (!questions || questions.length === 0) {
    return <div>Carregando perguntas...</div>;
  }
  
  
  const currentQuestionData = questions[currentQuestion];


    return (
        <div className="box">
            <div className="title">
                FI QUEST APP
            </div>
            <div className="header">
                <div className="scoreBox">Score : {score}</div>
                <p className="currentQuestions">
                    Pergunta de {currentQuestion + 1} de {questions.length}
                </p>
            </div>

            <div id="question">
           
            <h2>{currentQuestionData.question}</h2>
                <div id="options-container">
                    {currentQuestionData.options.map((option) => (
                        <Option 
                        option = {option} 
                        key={option} 
                        answer = {currentQuestionData.answer} 
                        selectOption = {() => onSelectOption(option)}
                        />
                    ))}
                </div>
                {answerSelected && (
                    <button onClick={()=> dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
                )}
            </div>
        </div>


  )
}

export default Question