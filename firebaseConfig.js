// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvRdGDFoSC8X_7euTzRL_lBXJ0flkaj-4",
  authDomain: "log-in-68d4a.firebaseapp.com",
  projectId: "log-in-68d4a",
  storageBucket: "log-in-68d4a.appspot.com",
  messagingSenderId: "534464765466",
  appId: "1:534464765466:web:691d4f613d814f1fd87ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}