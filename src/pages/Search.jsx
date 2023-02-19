import React, { useContext, useEffect, useState } from 'react'
import { restaurant } from '../context/'

const Search = () => {

    const { allDishes, getAllDishes, getRestaurants } = useContext(restaurant.restaurantContext)

    const [allDishesLocal, setAllDishesLocal] = useState()
    const [tempDishes, setTempDishes] = useState([])

    const handleSubmit = (event) => {
        if (event.key === 'Enter' && event.target.value !== "") {
            for (let i = 0; i < allDishesLocal.length; i++) {
                let restaurantDishes = allDishesLocal[i]
                for (let j = 0; j < restaurantDishes.length; j++) {
                    const dishes = restaurantDishes[j];
                    if (tempDishes.length === 0) {
                        setTempDishes(tempDishes => [...tempDishes, dishes])
                    }
                }
            }
            console.log("tempDishes", tempDishes);
        }
    }

    useEffect(() => {
        if (allDishes.length === 0) {
            getRestaurants()
            getAllDishes()
        }
        setAllDishesLocal(allDishes)
    }, [allDishes])


    return (

        <>
            <div className='search-bar position-relative mx-3 my-4'>
                <i className='fa-solid fa-magnifying-glass position-absolute search-icon ps-2'></i>
                <input onKeyDown={event => handleSubmit(event)} className='form-control rounded-3 ps-5' type="text" placeholder='Search for a dish' />
            </div>

        </>
    )
}

export default Search