import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyA8TW1swioCyTYjmpjM7Tx45CQtZ9kEGWk",
  authDomain: "websters-3bffb.firebaseapp.com",
  projectId: "websters-3bffb",
  storageBucket: "websters-3bffb.appspot.com",
  messagingSenderId: "1057115948111",
  appId: "1:1057115948111:web:30a5a97383d50c2625163a",
  measurementId: "G-D2T9JTPSTV"
};

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();

export default firebaseConfig;
