import React, { useContext, useEffect } from 'react';
import AppFooter from '../../components/AppFooter/AppFooter';
import AppHeader from '../../components/AppHeader/AppHeader';

//componetes
import GameOver from '../../components/GameOver/GameOver';
import Question from '../../components/Question/Question';
import SideMenu from '../../components/SideMenu/SideMenu';
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
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <div className="container">

          <div className='container-quiz'>

            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver />}

          </div>

        </div>

      </div>
      <AppFooter />
    </div>



  )
}

export default Quiz