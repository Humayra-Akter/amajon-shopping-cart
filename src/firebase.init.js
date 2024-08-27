// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC43XJdodpumq2GdpliwpfLa-S2of-_D_o",
  authDomain: "amajon-42494.firebaseapp.com",
  projectId: "amajon-42494",
  storageBucket: "amajon-42494.appspot.com",
  messagingSenderId: "221273068630",
  appId: "1:221273068630:web:821e7f7cce2cbdf5ae97f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
