import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from '../../contexts/Quiz';
import Option from "../Option/Option";
import './Question.css';

const GameTimer = ({ onTimeExpired }) => {
  const [quizState] = useContext(QuizContext);
  const { answerSelected, currentQuestion } = quizState;
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let intervalId = null;

    if (timer > 0 && !answerSelected) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && !answerSelected) {
      onTimeExpired();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, answerSelected, onTimeExpired]);

  useEffect(() => {
    if (currentQuestion !== null && !answerSelected) {
      setTimer(10);
    }
  }, [currentQuestion, answerSelected]);

  const progressWidth = (timer / 10) * 100;

  return (
    <div className="game-timer">
      {timer > 0 && (
        <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
      )}
    </div>
  );
};

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { questions, currentQuestion, score, answerSelected } = quizState;
  const [continueClicked, setContinueClicked] = useState(false);

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestionData.answer, option },
    });
  };

  const currentQuestionData = questions[currentQuestion];

  const handleTimeExpired = () => {
    if (!answerSelected && !continueClicked) {
      dispatch({ type: "CHECK_ANSWER", payload: { answer: null } });
    }
  };

  useEffect(() => {
    if (answerSelected) {
      setContinueClicked(false);
    }
  }, [answerSelected]);

  const handleContinue = () => {
    if (answerSelected) {
      setContinueClicked(true);
      dispatch({ type: "CHANGE_QUESTION" });
    }
  };

  useEffect(() => {
    if (currentQuestion === questions.length - 1) {
      dispatch({ type: "END_QUIZ" });
    }
  }, [currentQuestion, questions.length, dispatch]);

  return (
    <div className="box">
      <div className="title">FI QUEST APP</div>
      <div className="header">
        <div className="scoreBox">Score : {score}</div>
        <p className="currentQuestions">
          Pergunta de {currentQuestion + 1} de {questions.length}
        </p>
      </div>

      <div id="question">
        <h2>{currentQuestionData.question}</h2>
        {currentQuestion !== null && (
          <>
            <GameTimer onTimeExpired={handleTimeExpired} />
            <div id="options-container">
              {currentQuestionData.options.map((option) => (
                <Option
                  option={option}
                  key={option}
                  answer={currentQuestionData.answer}
                  selectOption={() => onSelectOption(option)}
                />
              ))}
            </div>
            {answerSelected && !continueClicked && (
              <button onClick={handleContinue}>
                Continuar
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
