import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCeUdgk-dLMXmtAb5q7gW-lCWh42__wm2M",
  authDomain: "newproyect-8b221.firebaseapp.com",
  projectId: "newproyect-8b221",
  storageBucket: "newproyect-8b221.appspot.com",
  messagingSenderId: "274378991310",
  appId: "1:274378991310:web:79d3f498acfefbb410d29f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
