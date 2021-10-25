// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyqhKzN9j_i8I7RQfouGGepRcOycU7Uak",
  authDomain: "mern-20.firebaseapp.com",
  projectId: "mern-20",
  storageBucket: "mern-20.appspot.com",
  messagingSenderId: "517181479240",
  appId: "1:517181479240:web:d7fb6c65c25b9f7f4cfb7d",
  measurementId: "G-NVJREQH2Z5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
