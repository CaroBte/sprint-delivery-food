import { db } from "./firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

// CRUD 

//CreateUser

const userCollection = collection(db, "users")
/* export const createUser = async (user) => await addDoc(userCollection, user) */

export const createUser = async (user, _id) => await setDoc(doc(userCollection, _id), user)
