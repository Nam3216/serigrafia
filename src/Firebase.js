// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxv4z7PITLDi7Ay2WZADjUFPMqE2KPWBs",
  authDomain: "planograf-d4168.firebaseapp.com",
  projectId: "planograf-d4168",
  storageBucket: "planograf-d4168.appspot.com",
  messagingSenderId: "598717000966",
  appId: "1:598717000966:web:be115cc77dd9f46065c287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db