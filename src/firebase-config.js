import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBUavQ9eKoJbcqq8cT1nEcjrtb5d4RnRls",
  authDomain: "playgreen-fde4c.firebaseapp.com",
  projectId: "playgreen-fde4c",
  storageBucket: "playgreen-fde4c.appspot.com",
  messagingSenderId: "215813618687",
  appId: "1:215813618687:web:335138a2d679945481c5ca",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
