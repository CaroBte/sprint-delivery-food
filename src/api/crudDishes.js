import { collection, setDoc, doc, getDocs, getDoc } from "firebase/firestore";

import { db } from "./firebase"

// CRUD 

//Get all dishes from a restaurant 

export const getDishes = async (_rid) => {
    const dishesCollection = collection(db, `restaurants/${_rid}/dishes`)

    const snapshot = await getDocs(dishesCollection)
    const dishes = []

    snapshot.docs.forEach(d => {
        const dish = d.data()
        dish.id = d.id
        dishes.push(dish)
    })

    return { dishes }
}

//Get an especific dish from the restaurant

export const getDish = async (_idR, _idD) => {

    const dishesCollection = collection(db, `restaurants/${_idR}/dishes`)

    const dishData = await getDoc(doc(dishesCollection, _idD))
    const dish = dishData.data()
    dish.id = dishData.id

    return { dish: dish }
}