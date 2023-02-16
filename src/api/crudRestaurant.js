import { db } from "./firebase";
import { collection, setDoc, doc, getDocs } from "firebase/firestore";

// CRUD 
const restaurantCollection = collection(db, "restaurants")

// Create a new restaurant without duplicate
export const createRestaurant = async (restaurant, _id) => await setDoc(doc(restaurant, _id), restaurant) //cuando capture la info, el _id es restaurant.name c: 

//Get restaurant collection from firebase database
export const getRestaurant = async () => {
    const snapshot = await getDocs(restaurantCollection)
    const restaurants = []
    snapshot.forEach(r => {
        const restaurant = r.data()
        /* restaurant.id = r.name */
        restaurants.push(restaurant)
    });
    return { restaurants }
}