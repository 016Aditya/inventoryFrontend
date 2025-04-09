// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVUOml90byFwgtWeqN0Hr9yGOeWIbJIYo",
  authDomain: "inventory-7557e.firebaseapp.com",
  projectId: "inventory-7557e",
  storageBucket: "inventory-7557e.firebasestorage.app",
  messagingSenderId: "475221079009",
  appId: "1:475221079009:web:580443036449edc9b298a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);