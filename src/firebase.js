import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxH-xImiV3K3E05wnmh_JfAgPQ1wW2eBA",
  authDomain: "fir-644f8.firebaseapp.com",
  projectId: "fir-644f8",
  storageBucket: "fir-644f8.firebasestorage.app",
  messagingSenderId: "497661798642",
  appId: "1:497661798642:web:54ec908690bc58e158486b",
  measurementId: "G-60PNXLVKH8"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db= getFirestore(app);
export const provider = new GoogleAuthProvider();