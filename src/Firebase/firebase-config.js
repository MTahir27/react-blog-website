// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd5Gy0SlxYMExDVAbzo4r23-X8a8hyo0s",
  authDomain: "react-blog-app-598ff.firebaseapp.com",
  projectId: "react-blog-app-598ff",
  storageBucket: "react-blog-app-598ff.appspot.com",
  messagingSenderId: "302176302249",
  appId: "1:302176302249:web:82233e318213b10579e5b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
