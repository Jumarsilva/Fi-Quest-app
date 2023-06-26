const GameTimer = ({ onTimeExpired }) => {
    const [timer, setTimer] = useState(10);
    const [quizState, dispatch] = useContext(QuizContext);
    const { answerSelected, currentQuestion } = quizState;
  
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
      setTimer(10);
    }, [currentQuestion]);
  
    const progressWidth = (timer / 10) * 100;
  
    return (
      <div className="game-timer">
        <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
      </div>
    );
  };
  