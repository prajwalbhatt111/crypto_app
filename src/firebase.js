// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPE0IrBjHrwHSqSEjPkdl-cVUKJh8Q0ho",
    authDomain: "crypto-app-63d84.firebaseapp.com",
    projectId: "crypto-app-63d84",
    storageBucket: "crypto-app-63d84.appspot.com",
    messagingSenderId: "369808294552",
    appId: "1:369808294552:web:b92f6d9dd3b39c2b1706ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)