import React, { useContext, useEffect } from 'react';

//componetes
import GameOver from '../../components/GameOver/GameOver';
import Question from '../../components/Question/Question';
import Welcome from '../../components/Welcome/Welcome';
import { QuizContext } from '../../contexts/Quiz';

//estilo

import './Quiz.css';


const Quiz = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" })
  }, [])

  return (

    <div className="AppContent">

      <div className="SideMenuAndPageContent">
        
        <div className="container">

          <div className='container-quiz'>

            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver />}

          </div>

        </div>

      </div>

    </div>



  )
}

export default Quiz