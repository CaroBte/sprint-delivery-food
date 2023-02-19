import { createContext, useState } from "react";
import { crudRestaurant, crudDishes } from "../api";


export const restaurantContext = createContext()

export const RestaurantProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState(null)
    const [dishes, setDishes] = useState(null)
    const [actRestaurant, setActRestaurant] = useState(null)
    const [actDish, setActDish] = useState(null)
    const [allDishes, setAllDishes] = useState([])

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

    //Get a dish for ID
    const getDish = async (_idR, _idD) => {
        let res = await crudDishes.getDish(_idR, _idD)
        setActDish(res.dish)
    }

    //Get All Dishes from all restaurants
    const getAllDishes = async () => {
        await getRestaurants()
        restaurants.forEach(async (r) => {
            let rid = r.name
            let res = await crudDishes.getDishes(rid)
            setAllDishes(allDishes => [...allDishes, res.dishes])
        })
    }

    //Variables for the context
    const variables = {
        restaurants, getRestaurants, setRestaurants,
        actRestaurant, getRestaurant, setActRestaurant,
        dishes, getDishes, setDishes,
        actDish, getDish, setActDish,
        allDishes, getAllDishes
    }

    return (
        <restaurantContext.Provider value={variables}>
            {children}
        </restaurantContext.Provider>
    )
}