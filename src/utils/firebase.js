// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD68N_MJ7AOT2z3uMWZwk4aLL72pzDl8to",
  authDomain: "netflixgpt-d0eb8.firebaseapp.com",
  projectId: "netflixgpt-d0eb8",
  storageBucket: "netflixgpt-d0eb8.firebasestorage.app",
  messagingSenderId: "763040066056",
  appId: "1:763040066056:web:ffc0c1cb627c378ef2bfbd",
  measurementId: "G-PLJE485FEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
