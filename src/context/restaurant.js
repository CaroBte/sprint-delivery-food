import { createContext, useState } from "react";
import { crudRestaurant } from "../api";


export const restaurantContext = createContext()

export const RestaurantProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState(null)

    const getRestaurants = async () => {
        setRestaurants(null)
        let res = await crudRestaurant.getRestaurant()
        setRestaurants(res.restaurants)
    }

    return (
        <restaurantContext.Provider value={{ restaurants, getRestaurants, setRestaurants }}>
            {children}
        </restaurantContext.Provider>
    )
}