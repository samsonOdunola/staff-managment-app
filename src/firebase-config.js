import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVgjKExSGHkS5j4SB0vSj7EAKD0LNHg7M",
  authDomain: "lig-hris.firebaseapp.com",
  projectId: "lig-hris",
  storageBucket: "lig-hris.appspot.com",
  messagingSenderId: "631077451012",
  appId: "1:631077451012:web:ff7d11284ea17f61230c51",
  measurementId: "G-YG6SWWJGVG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
