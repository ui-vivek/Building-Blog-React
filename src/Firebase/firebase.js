// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";  
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};
firebase.initializeApp(firebaseConfig); 
export const firestore = firebase.firestore();