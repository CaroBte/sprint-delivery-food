import React, { useContext, useEffect, useState } from 'react'
import { FilteredList } from '../components/'
import { restaurant } from '../context/'

const Search = () => {

    const { allDishes, getAllDishes, getRestaurants } = useContext(restaurant.restaurantContext)

    const [allDishesLocal, setAllDishesLocal] = useState()
    const [tempDishes, setTempDishes] = useState([])
    const [filtered, setFiltered] = useState()

    const handleSubmit = (event) => {
        const searched = event.target.value

        for (let i = 0; i < allDishesLocal.length; i++) {
            let restaurantDishes = allDishesLocal[i]
            for (let j = 0; j < restaurantDishes.length; j++) {
                const dishes = restaurantDishes[j];
                if (tempDishes.length === 0) {
                    setTempDishes(tempDishes => [...tempDishes, dishes])
                }
            }
        }

        handleFilter(searched, tempDishes)
    }

    const handleFilter = (_searched, _array) => {
        let filterDishes = _array.filter(({ category, name }) => {
            return category.includes(_searched) || name.includes(_searched)
        })
        setFiltered(filterDishes)
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
                <input onChange={event => handleSubmit(event)} className='form-control rounded-3 ps-5' type="text" placeholder='Search for a dish' />
            </div>
            <FilteredList list={filtered} />

        </>
    )
}

export default Search