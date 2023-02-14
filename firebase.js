// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4O6Xjm9f9ZVe7HBhlbCH31m-ooP3pPxU",
  authDomain: "botinhood-2ea07.firebaseapp.com",
  projectId: "botinhood-2ea07",
  storageBucket: "botinhood-2ea07.appspot.com",
  messagingSenderId: "506436304821",
  appId: "1:506436304821:web:a711a32594cd17870ea3fc",
  measurementId: "G-CCF2EVJK7B"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
  