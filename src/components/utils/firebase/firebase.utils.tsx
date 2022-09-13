import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa4a3kUTxmD43B47NINto_wJ9kwBrPv7k",
  authDomain: "shopping-app-db-40d09.firebaseapp.com",
  projectId: "shopping-app-db-40d09",
  storageBucket: "shopping-app-db-40d09.appspot.com",
  messagingSenderId: "474195402195",
  appId: "1:474195402195:web:fa54950fb4c6f67921a326",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// Auth
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// DB
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: any) {
      console.log("error create the user", error.message);
    }
  }

  return userDocRef;
};
