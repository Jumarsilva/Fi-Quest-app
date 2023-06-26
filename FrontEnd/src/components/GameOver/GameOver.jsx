import { useContext } from "react";
import logo from "../../assets/img/logofi.png";
import { QuizContext } from "../../contexts/Quiz";
import "./GameOver.css";
import { useNavigate } from "react-router-dom";

const GameOver = () => {
  const [quizStage, dispatch] = useContext(QuizContext);
  const navigate = useNavigate(); // Corrigido: useNavigate dentro do componente

  const handleEncerrar = () => {
    dispatch({ type: "NEW_GAME" })
    navigate("/home"); // Corrigido: Chamar a função navigate dentro de uma função
    
  };

  return (
    <div className="box">
      <div className="title">FI QUEST - Resultados</div>
      <div className="box-container">
        <div id="gameover">
          <label htmlFor="">Perguntas :</label>
          <span id="totalQuestions">{quizStage.questions.length}</span>
          <label htmlFor="">Acertos :</label>
          <span id="correctsAnswers">{quizStage.score}</span>
          <label htmlFor="">Erros : </label>
          <span id="wrongsAnswers">
            {quizStage.questions.length - quizStage.score}
          </span>
        </div>
        <div>
          <img src={logo} alt="Fim do Jogo" />
        </div>
      </div>
      <div className="return">
        <button onClick={handleEncerrar}>Encerrar</button>
      </div>
    </div>
  );
};

export default GameOver;
