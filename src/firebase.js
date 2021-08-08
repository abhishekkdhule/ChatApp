import firebase from "firebase";
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA-s1GjQg5SF-U9oU4GrlK7apq-lwknipA",
  authDomain: "chat-app-e05e2.firebaseapp.com",
  projectId: "chat-app-e05e2",
  storageBucket: "chat-app-e05e2.appspot.com",
  messagingSenderId: "689295248879",
  appId: "1:689295248879:web:87050b73d993a57c39fa1a"
  });
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()

export {
  firebase,db
}