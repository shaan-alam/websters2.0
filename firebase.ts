import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAFpvytSRiojIPWns2BPtBRfBAKByxveBs",
  authDomain: "websters-e507c.firebaseapp.com",
  projectId: "websters-e507c",
  storageBucket: "websters-e507c.appspot.com",
  messagingSenderId: "636922744643",
  appId: "1:636922744643:web:15748cb35ad1c9fe60e9f6",
  measurementId: "G-500BDCC8BW"
};


let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

export default firebaseConfig;
