
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyAkrdwSkGJUmI3ULA3J7m1qdktYnOzQdQw",
  authDomain: "chatapp-6695b.firebaseapp.com",
  projectId: "chatapp-6695b",
  storageBucket: "chatapp-6695b.appspot.com",
  messagingSenderId: "97007922340",
  appId: "1:97007922340:web:e24d06645c9bb051c2ca31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();