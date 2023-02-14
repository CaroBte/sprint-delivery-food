import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUgaIvtXRNvDByi2b1acwwkLL0xb9FuGE",
    authDomain: "sprint4-fda.firebaseapp.com",
    projectId: "sprint4-fda",
    storageBucket: "sprint4-fda.appspot.com",
    messagingSenderId: "448454810640",
    appId: "1:448454810640:web:2f30f19b1f8e8842aa7e95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();