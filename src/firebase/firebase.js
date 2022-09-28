// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdBV4KlvN59-Z1EWsc9qiQGnqjoNjW9fE",
  authDomain: "login-38f30.firebaseapp.com",
  projectId: "login-38f30",
  storageBucket: "login-38f30.appspot.com",
  messagingSenderId: "179390671203",
  appId: "1:179390671203:web:04685fe14d89f6c36e0b56",
  measurementId: "G-HCD9Y2CFYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);


export  { authentication };