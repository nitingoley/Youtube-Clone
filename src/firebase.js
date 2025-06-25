import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc0r6Qq9BN_UwR7pmrlFnpvXfXqtBMHZE",
  authDomain: "clone-3f004.firebaseapp.com",
  projectId: "clone-3f004",
  storageBucket: "clone-3f004.appspot.com",
  messagingSenderId: "459920311659",
  appId: "1:459920311659:web:ee9b21ed8e9cba1811b82e",
  measurementId: "G-D5RX65TTJT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(); 