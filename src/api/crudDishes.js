import { collection, setDoc, doc, getDocs } from "firebase/firestore";

import { db } from "./firebase"

// CRUD 

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
