
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection } from 'firebase/firestore'; // Import Firestore functions
//import { addDoc } from 'firebase/firestore'; // Replace with correct import path

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvE30z8Kwm_2o0H3tRx8H0-jlNdyvtG9A",
  authDomain: "yesos-cb0d7.firebaseapp.com",
  projectId: "yesos-cb0d7",
  storageBucket: "yesos-cb0d7.appspot.com",
  messagingSenderId: "668049679807",
  appId: "1:668049679807:web:30394fd3ee3abc7ab9ed0a",
  measurementId: "G-MBBMVRFR3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore