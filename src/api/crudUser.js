import { db } from "./firebase";
import { collection, setDoc, doc } from "firebase/firestore";

// CRUD 

//CreateUser without duplicate & maybe update user (?)

const userCollection = collection(db, "users")
export const sendUser = async (user, _id) => await setDoc(doc(userCollection, _id), user)