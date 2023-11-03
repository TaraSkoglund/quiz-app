import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./config";

import { doc, getDoc } from "firebase/firestore";

export const getQuisData = async (quizId: string) => {
  const docRef = doc(db, "QuizData", quizId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const quizData = docSnap.data();
    return quizData;
  } else {
    console.log("No such document!");
  }
};

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCredential.user.getIdToken();
    console.log("Användaren har skapats", userCredential);

    return userCredential.user;
  } catch (error) {
    console.error("Ett fel uppstod vid registrering", error);

    return null;
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCredential.user.getIdToken();
    console.log("Användare har loggats in", userCredential.user);
    console.log("getIdToken", idToken);
    return userCredential.user;
  } catch (error) {
    console.error("ett fel uppstod vid inloggning", error);
    return null;
  }
};

export const signOutUser = async () => {
  let isSignedOut = false;
  try {
    await signOut(auth);
    isSignedOut = true;
    console.log("Användare har loggats ut");
  } catch (error) {
    console.error("ett fel uppstod vid utloggning", error);
  } finally {
    return isSignedOut;
  }
};
