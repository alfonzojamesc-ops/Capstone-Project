// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwCm6Q8BHj-LgfdsZhmqWzVu8ZlcaI0D4",
  authDomain: "test-37621.firebaseapp.com",
  projectId: "test-37621",
  storageBucket: "test-37621.firebasestorage.app",
  messagingSenderId: "1094066055213",
  appId: "1:1094066055213:web:d1f31968cfefe09c51f0a4",
  measurementId: "G-S554ZHJ09M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
