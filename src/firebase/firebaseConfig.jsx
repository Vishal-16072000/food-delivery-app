// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzoDHzJxwUtTw-fS7lFyHdwr_IHiwKZjA",
  authDomain: "food-delivery-app-31fbd.firebaseapp.com",
  projectId: "food-delivery-app-31fbd",
  storageBucket: "food-delivery-app-31fbd.firebasestorage.app",
  messagingSenderId: "273222660636",
  appId: "1:273222660636:web:72439e64969aa6e9cf25d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};