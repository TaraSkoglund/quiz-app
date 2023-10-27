import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection } from "firebase/firestore";
import { auth, db } from "./config";

const getQuisData = async () => {
  try {
    const colRef = collection(db, "QuizData");
    console.log("QuizData har hämtats från databas", colRef);
    return colRef;
  } catch (error) {
    console.error("Ett fel uppstod vid hämtnig från databas");
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
