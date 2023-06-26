import React, { createContext, useEffect, useReducer } from "react";
/* import questions from '../data/questions'; */

const fetchQuestions = async (forceFetch = false) => {
    try {
      if (forceFetch || !localStorage.getItem("questions")) {
        const response = await fetch("http://127.0.0.1:8000/questions/?format=json");
        const data = await response.json();
  
        // Processar os dados recebidos
        const questions = data.map((item) => ({
          id_question: item.id_question,
          question: item.question,
          options: item.options.split(";"),
          answer: item.answer,
          tip: item.tip,
        }));
  
        localStorage.setItem("questions", JSON.stringify(questions));
        return questions;
      }
  
      return JSON.parse(localStorage.getItem("questions"));
    } catch (error) {
      console.error('Erro ao buscar as perguntas:', error);
      return [];
    }
  };

const STAGES = ['Start',"Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions: [],
    currentQuestion:0,
    score: 0,
    answerSelected: false,
    timer:200,
}

const quizReducer = (state, action) =>{
    
    switch (action.type) {

        case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
      };

        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            }
        
        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorderedQuestions, 
            };
        
        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if (!state.questions[nextQuestion]) {
                endGame = true;
            }

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            }

        case "NEW_GAME":
            return initialState;



        case 'CHECK_ANSWER':
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;

            let correctAnswer = 0;

            if (answer === option) {
                correctAnswer = 1
            }

            return{
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }

        default:
            return state;
    }
}


export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(quizReducer, initialState);

    useEffect(() => {
        const loadQuestions = async () => {
          const fetchedQuestions = await fetchQuestions();
          dispatch({ type: "SET_QUESTIONS", payload: fetchedQuestions });
        };
    loadQuestions();
      }, []);

  const value = [state, dispatch];

    
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;


};