// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5NFM9_Caz5Xc7Ii9rjO4vImBRwZkAGgY",
  authDomain: "webprueba-7499a.firebaseapp.com",
  projectId: "webprueba-7499a",
  storageBucket: "webprueba-7499a.appspot.com",
  messagingSenderId: "1012547751009",
  appId: "1:1012547751009:web:f6dc721f1b262c92656e20",
  measurementId: "G-7CLD6915WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);