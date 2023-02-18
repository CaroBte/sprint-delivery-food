import { db } from "./firebase";
import { collection, setDoc, doc, getDocs, getDoc } from "firebase/firestore";

// CRUD 
const restaurantCollection = collection(db, "restaurants")

// Create a new restaurant without duplicate
export const createRestaurant = async (restaurant, _id) => await setDoc(doc(restaurant, _id), restaurant) //cuando capture la info, el _id es restaurant.name c: 

//Get restaurants collection from firebase database
export const getRestaurants = async () => {
    const snapshot = await getDocs(restaurantCollection)
    const restaurants = []
    snapshot.forEach(r => {
        const restaurant = r.data()
        restaurant.id = r.name
        restaurants.push(restaurant)
    });
    return { restaurants }
}

//Get an especific restaurant from the restaurants collection

export const getRestaurant = async (_id) => {
    const restaurantData = await getDoc(doc(restaurantCollection, _id))
    const restaurant = restaurantData.data()
    restaurant.id = restaurantData.id
    return { restaurant: restaurant }
}
