// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1eNtd1ZXlfxS-Bbl-FELFVt8W_Fjf2f0",
    authDomain: "tattion-49c20.firebaseapp.com",
    projectId: "tattion-49c20",
    storageBucket: "tattion-49c20.appspot.com",
    messagingSenderId: "358640266160",
    appId: "1:358640266160:web:5710b130f7ffb2aac7c475",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
