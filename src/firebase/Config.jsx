 import firebase from "firebase"
// import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTTe6e-N2cQmrXs1fq9PBJ4hdSb7GXXvg",
    authDomain: "fir-6a5c1.firebaseapp.com",
    projectId: "fir-6a5c1",
    storageBucket: "fir-6a5c1.appspot.com",
    messagingSenderId: "211296743451",
    appId: "1:211296743451:web:8d39fe973c525557b0c8be",
    measurementId: "G-L8Z6FB1TW5"
  };

 export const fire= firebase.initializeApp(firebaseConfig)