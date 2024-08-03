// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2_trMWV0BQ13DElSghkYbxSIRsmb-bFM",
  authDomain: "anytimefitness-2be36.firebaseapp.com",
  projectId: "anytimefitness-2be36",
  storageBucket: "anytimefitness-2be36.appspot.com",
  messagingSenderId: "239886760227",
  appId: "1:239886760227:web:84637ce84acb949818f496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// export const auth = getAuth(app); 
export { auth, firestore };
