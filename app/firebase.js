// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtTM0y6hLmYDVyzWrxGQ-M5FnQvsS3FOQ",
  authDomain: "aiflashcards-c957d.firebaseapp.com",
  projectId: "aiflashcards-c957d",
  storageBucket: "aiflashcards-c957d.appspot.com",
  messagingSenderId: "148396886441",
  appId: "1:148396886441:web:80a2c11c80b4ecd7cddcb8",
  measurementId: "G-VQJ4043K4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
