import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1_uWXFTdMXFC_aQ4UrdcUQhUhVdExjpU",
  authDomain: "webstersshivaji-b3f32.firebaseapp.com",
  projectId: "webstersshivaji-b3f32",
  storageBucket: "webstersshivaji-b3f32.appspot.com",
  messagingSenderId: "378595998276",
  appId: "1:378595998276:web:3f212ae5c679b9e7fe9a11",
  measurementId: "G-V3DEC3NPY5"
};


let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

export default firebaseConfig;
