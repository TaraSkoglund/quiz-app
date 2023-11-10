import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./config";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

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

export const getAllGameData = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "GameData"), orderBy("result", "desc"))
  );
  const gameDataList: { game_name: string; result: number }[] = [];
  querySnapshot.forEach((doc) => {
    if (doc.exists()) {
      const gameData = doc.data() as { game_name: string; result: number };
      gameDataList.push(gameData);
    } else {
      console.log("No such document!");
    }
  });
  return gameDataList;
};

export const saveGameData = async (game_name: string, correctCount: number) => {
  try {
    const docRef = await addDoc(collection(db, "GameData"), {
      game_name: game_name,
      result: correctCount,
    });
  } catch (error) {
    console.error("Ett fel uppstod vid skrivning av dokument: ", error);
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
    console.log("Användare har loggats in");
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
