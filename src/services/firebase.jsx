// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4NSjLUlvPsVNTs7fLZ5I5-KnLnDDw5uI",
  authDomain: "fi-quest-app.firebaseapp.com",
  projectId: "fi-quest-app",
  storageBucket: "fi-quest-app.appspot.com",
  messagingSenderId: "1076318728634",
  appId: "1:1076318728634:web:912261007bc1960f3fad83",
  measurementId: "G-N5NEZFKZEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
