import { createContext, useState } from "react";
import { crudRestaurant, crudDishes } from "../api";


export const restaurantContext = createContext()

export const RestaurantProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState(null)
    const [dishes, setDishes] = useState(null)
    const [actRestaurant, setActRestaurant] = useState(null)

    // Get all restaurants
    const getRestaurants = async () => {
        setRestaurants(null)
        let res = await crudRestaurant.getRestaurants()
        setRestaurants(res.restaurants)
    }

    //Get a restaurant by ID
    const getRestaurant = async (_id) => {
        let res = await crudRestaurant.getRestaurant(_id)
        setActRestaurant(res.restaurant)
    }

    // Get all dishes from one restaurant
    const getDishes = async (_rid) => {
        let res = await crudDishes.getDishes(_rid)
        setDishes(res.dishes)
    }

    //Variables for the context
    const variables = {
        restaurants, getRestaurants, setRestaurants,
        actRestaurant, getRestaurant, setActRestaurant,
        dishes, getDishes, setDishes
    }

    return (
        <restaurantContext.Provider value={variables}>
            {children}
        </restaurantContext.Provider>
    )
}