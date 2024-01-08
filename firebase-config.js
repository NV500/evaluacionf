// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLTYTUBse_DM181dhBxRVq4ypeYiIDXa4",
    authDomain: "sinfb3-9a701.firebaseapp.com",
    projectId: "sinfb3-9a701",
    storageBucket: "sinfb3-9a701.appspot.com",
    messagingSenderId: "176550063175",
    appId: "1:176550063175:web:ebfc8f59fd8157b68a5562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();