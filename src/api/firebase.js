import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

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
const app = initializeApp(firebaseConfig);

//Login & Logout
export const auth = getAuth(app)
const authProvider = new GoogleAuthProvider()

export const login = async () => {
    authProvider.setCustomParameters({ prompt: "select_account" })
    const res = await signInWithPopup(auth, authProvider)
    return res.user
}

export const logout = async () => await signOut(auth)
