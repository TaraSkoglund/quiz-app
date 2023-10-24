import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./config";

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
  try {
    await signOut(auth);
    console.log("Användare har loggats ut");
  } catch (error) {
    console.error("ett fel uppstod vid utloggning", error);
  }
};

// context för user om man är inloggad eller inte, som ett state "IsLogdIn"
// onauthstatechange kan va bra att lägga till fins i youtube totorial
