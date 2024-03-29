import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYyNDucCZugNAUiFOVyveoPhORCawYUSs",
  authDomain: "quiz-app-cb709.firebaseapp.com",
  projectId: "quiz-app-cb709",
  storageBucket: "quiz-app-cb709.appspot.com",
  messagingSenderId: "951538612161",
  appId: "1:951538612161:web:0c03e1b7b7ea7829e26140",
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(firebase_app);

export const auth = getAuth(firebase_app);
