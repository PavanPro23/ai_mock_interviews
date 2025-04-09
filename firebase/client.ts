// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlTPmcP-jbt67eIG0N6TG7oPEMtieW50Q",
  authDomain: "mockprep-62a1c.firebaseapp.com",
  projectId: "mockprep-62a1c",
  storageBucket: "mockprep-62a1c.firebasestorage.app",
  messagingSenderId: "288869490742",
  appId: "1:288869490742:web:245f820811e74613117897",
  measurementId: "G-988ZTLDXQJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)