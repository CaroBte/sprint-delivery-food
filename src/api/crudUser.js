import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// CRUD 

//CreateUser

const userCollection = collection(db, "users")
export const createUser = async (user) => await addDoc(userCollection, user)