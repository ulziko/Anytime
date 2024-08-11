// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ96JHRienO2pg3H0C6Ng7H5KWoK4fOPQ",
  authDomain: "anytime-8ba38.firebaseapp.com",
  databaseURL: "https://anytime-8ba38-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anytime-8ba38",
  storageBucket: "anytime-8ba38.appspot.com",
  messagingSenderId: "676908011042",
  appId: "1:676908011042:web:2a3f158b2c60493256847b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

// export const auth = getAuth(app); 
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);