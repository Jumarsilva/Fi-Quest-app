import { useContext } from "react";



import "./GameOver.css"
import logo from "../../assets/img/logofi.png"
import { QuizContext } from '../../contexts/Quiz';


const GameOver = () => {
    const [quizStage, dispatch] = useContext(QuizContext);
    return (
        <div className="box">
            <div className="title">
                FI QUEST - Resultados
            </div>
            <div className="box-container">
                <div id="gameover">
                                <label htmlFor="">Perguntas :</label>
                                <span id="totalQuestions">{quizStage.questions.length}</span>
                                <label htmlFor="">Acertos :</label>
                                <span id="correctsAnswers">{quizStage.score}</span>
                                <label htmlFor="">Erros : </label>
                                <span id="wrongsAnswers">{quizStage.questions.length - quizStage.score}</span>

                </div>
                <div>
                    <img src={logo} alt="Fim do Jogo" />
                </div>

            </div>
           
           

        <div className="return">
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
        </div>
       
        )
}

export default GameOver