import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { restaurant } from '../context/'
import { DishesList, InfoRestaurant } from '../components/'

const RestaurantDetail = () => {

    const { idR } = useParams()

    const { actRestaurant, getRestaurant, setActRestaurant,
        dishes, getDishes } = useContext(restaurant.restaurantContext)

    useEffect(() => {
        setActRestaurant(null)
        if (idR) {
            getRestaurant(idR)
            getDishes(idR)
        }
    }, [idR])


    return (

        <>
            {<>
                <Link to={"/"}>
                    <i className="fa-solid fa-chevron-left ms-3"></i>
                </Link>
                {actRestaurant ? (<>


                    <InfoRestaurant actRestaurant={actRestaurant} />
                    <DishesList list={dishes} /></>
                ) : (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-warning mt-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                }

            </>}
        </>
    )

}



export default RestaurantDetail