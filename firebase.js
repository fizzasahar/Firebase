import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaHTIKW8Nx6mKNERvkDW5PFhU4YiX1FeE",
  authDomain: "my-first-project-efd23.firebaseapp.com",
  projectId: "my-first-project-efd23",
  storageBucket: "my-first-project-efd23.appspot.com",
  messagingSenderId: "964101048218",
  appId: "1:964101048218:web:1bea693c56491193411c23",
  measurementId: "G-B1J0XJ2K3M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut }



