// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyBdwTDCowfOG4caBdgHp5epy-PPGL6uf7o",
  authDomain: "dragonnewsproject-69253.firebaseapp.com",
  projectId: "dragonnewsproject-69253",
  storageBucket: "dragonnewsproject-69253.firebasestorage.app",
  messagingSenderId: "281610945777",
  appId: "1:281610945777:web:149fe677489c1af71f1550",
}; */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);