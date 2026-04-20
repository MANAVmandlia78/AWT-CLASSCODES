// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVwk-qYkJflV4ykiLKKBaIbcg-Yy1pX8g",
  authDomain: "fir-crud-44327.firebaseapp.com",
  projectId: "fir-crud-44327",
  storageBucket: "fir-crud-44327.firebasestorage.app",
  messagingSenderId: "745891977286",
  appId: "1:745891977286:web:87d0344abde66074ca5247"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);