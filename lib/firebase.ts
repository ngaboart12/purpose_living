import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe9OGUgEphR5WBOoXoNUI-qxh_r1If3Z8",
  authDomain: "purpose-living.firebaseapp.com",
  projectId: "purpose-living",
  storageBucket: "purpose-living.firebasestorage.app",
  messagingSenderId: "783971590547",
  appId: "1:783971590547:web:2b0d2ba4cf50fd2fc4c866",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
