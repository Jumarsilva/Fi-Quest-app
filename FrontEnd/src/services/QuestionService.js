import firebase from "firebaseApp"
import { sampleSize, shuffle } from "lodash";

let cachedQuestions;

const getAllQuestions = async () =>{

    if (cachedQuestions){
        return cachedQuestions;
    }

    const database = firebase.database()
    const snapshot = await database.ref(path="/quiz/questions").once(eventType='value');
    return snapshot

};

const getRandonQuestions = async () => {
    const questions = await getAllQuestions()
    const randonQuestions = sampleSize(questions, 5)

    return randonQuestions.map(question => ({
        ...question,
        choices: shuffle(question.choices)

    }))
}

export {
    getRandonQuestions
}