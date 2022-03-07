import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyAbz1SSNFBxEIpFvpLMxnfQcq3gfnmjy1o",
  authDomain: "react-shop-ce675.firebaseapp.com",
  projectId: "react-shop-ce675",
  storageBucket: "react-shop-ce675.appspot.com",
  messagingSenderId: "764673129062",
  appId: "1:764673129062:web:a841a08c972d0523894ba7"
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);