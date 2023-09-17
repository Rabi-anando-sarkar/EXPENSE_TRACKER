// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsTnAk4NJyT0byFZiygAlKVRdp8vfuQ-Y",
  authDomain: "expense-tracker-ee523.firebaseapp.com",
  projectId: "expense-tracker-ee523",
  storageBucket: "expense-tracker-ee523.appspot.com",
  messagingSenderId: "167510351193",
  appId: "1:167510351193:web:c8da8ecaf6b025b56e8048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);