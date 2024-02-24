import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2xaz9CD0YlvyNOfVozRez8WLQi8bcjMw",
  authDomain: "portfolio-c3609.firebaseapp.com",
  projectId: "portfolio-c3609",
  storageBucket: "portfolio-c3609.appspot.com",
  messagingSenderId: "885281166025",
  appId: "1:885281166025:web:5da410a9c1198e9f99f318",
  measurementId: "G-TWLETXTSL6"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);