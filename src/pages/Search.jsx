import React, { useContext, useEffect, useState } from 'react'
import { restaurant } from '../context/'
import { crudDishes } from "../api";

const Search = () => {

    /*     const allDishes = [] */
    const [allDishes, setAllDishes] = useState([])

    const { restaurants, getRestaurants } = useContext(restaurant.restaurantContext)

    const getAllDishes = async () => {
        await getRestaurants()

        restaurants.forEach(async (r) => {
            let rid = r.name
            let res = await crudDishes.getDishes(rid)
            setAllDishes(allDishes => [...allDishes, res.dishes])
            /* allDishes.push(res.dishes)
            return allDishes */
        })
    }

    const handleSearch = (searched) => {
        console.log(searched);
    }

    useEffect(() => {
        getRestaurants();
        getAllDishes()
    }, [])


    return (

        <>
            <div className='search-bar position-relative mx-3 my-4'>
                <i className='fa-solid fa-magnifying-glass position-absolute search-icon ps-2'></i>
                <input onChange={(e) => handleSearch(e.target.value)} className='form-control rounded-3 ps-5' type="text" placeholder='Search for a dish' />
            </div>

        </>
    )
}

export default Search