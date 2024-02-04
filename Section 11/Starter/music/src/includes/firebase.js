import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnvrv8YeO8B6w8fICzMKJTntN5xmRz-9Q",
  authDomain: "music-e2b32.firebaseapp.com",
  projectId: "music-e2b32",
  storageBucket: "music-e2b32.appspot.com",
  messagingSenderId: "735076552616",
  appId: "1:735076552616:web:192521a1fbdf25fa19979d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection
};
