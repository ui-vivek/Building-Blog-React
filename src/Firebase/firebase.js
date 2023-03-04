// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";  
const firebaseConfig = {
  apiKey: "AIzaSyC374fu4iXVwqouLqypltq3ri9aQayi_Pw",
  authDomain: "blog-35396.firebaseapp.com",
  projectId: "blog-35396",
  storageBucket: "blog-35396.appspot.com",
  messagingSenderId: "1046367830510",
  appId: "1:1046367830510:web:5b95aef37e8ea0fdc3ceff"
};
firebase.initializeApp(firebaseConfig); 
export const firestore = firebase.firestore();