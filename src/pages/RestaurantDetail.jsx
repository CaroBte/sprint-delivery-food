import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { restaurant } from '../context/'
import { DishesList, InfoRestaurant } from '../components/'

const RestaurantDetail = () => {

    const { id } = useParams()

    const { actRestaurant, getRestaurant, setActRestaurant,
        dishes, getDishes } = useContext(restaurant.restaurantContext)

    useEffect(() => {
        setActRestaurant(null)
        if (id) {
            getRestaurant(id)
            getDishes(id)
        }
    }, [id])


    return (

        <>
            {
                actRestaurant ? (
                    <>
                        <Link to={"/"}>
                            <i className="fa-solid fa-chevron-left ms-3"></i>
                        </Link>
                        <InfoRestaurant actRestaurant={actRestaurant} />
                        <DishesList list={dishes} />

                    </>
                ) : (
                    <h1>e</h1>
                )
            }

        </>
    )

}



export default RestaurantDetail