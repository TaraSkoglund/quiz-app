import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
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
    console.log("Användare har loggats in", userCredential);
    return userCredential.user;
  } catch (error) {
    console.error("ett fel uppstod vid inloggning", error);
    return null;
  }
};
