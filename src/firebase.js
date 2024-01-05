// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU8Qzg7mgJbKbHsVoohMbFnUjhPw39Xa8",
  authDomain: "intigym-e8cb4.firebaseapp.com",
  databaseURL: "https://intigym-e8cb4-default-rtdb.firebaseio.com",
  projectId: "intigym-e8cb4",
  storageBucket: "intigym-e8cb4.appspot.com",
  messagingSenderId: "602418806520",
  appId: "1:602418806520:web:77c1e1a5aed7cfb0fb850d",
  measurementId: "G-2JH3R17JZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export  const db = getFirestore(app);
