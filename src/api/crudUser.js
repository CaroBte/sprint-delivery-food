import { db } from "./firebase";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";

// CRUD 

//CreateUser without duplicate & maybe update user (?)

const userCollection = collection(db, "users")

export const sendUser = async (user, _id) => await setDoc(doc(userCollection, _id), user)

export const getUserDetails = async (id) => {
    const snapshot = await getDoc(doc(userCollection, id))
    const user = snapshot.data()
    user.id = snapshot.id
    return { data: user }
}