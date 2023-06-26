// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, onValue} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyB4NSjLUlvPsVNTs7fLZ5I5-KnLnDDw5uI",
  authDomain: "fi-quest-app.firebaseapp.com",
  databaseURL: "https://fi-quest-app-default-rtdb.firebaseio.com",
  projectId: "fi-quest-app",
  storageBucket: "fi-quest-app.appspot.com",
  messagingSenderId: "1076318728634",
  appId: "1:1076318728634:web:912261007bc1960f3fad83",
  measurementId: "G-N5NEZFKZEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);


//Caso queira realizar o upload completo de um arquivo json só usar a função abaixo
const upload = async () => {
  const questionsPath = "src/data/perguntas.json";

  try {
    const questionsJson = await readFile(questionsPath, "utf-8");
    const questions = JSON.parse(questionsJson);
    console.log(questions);

    const questionsRef = ref(db, "/quiz/questions");

    questions.forEach((q) => {
      push(questionsRef, q);
    });

    console.log("Finalizado");
  } catch (error) {
    console.error("Erro ao ler o arquivo de perguntas:", error);
  }
};

//upload();

export { auth, db, ref, onValue};