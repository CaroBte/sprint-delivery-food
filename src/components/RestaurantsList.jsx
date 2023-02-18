import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantsList = ({ list }) => {

    const LINK = "/restaurant/"

    return (
        <>
            {
                list && list.map((r) => {
                    let { name, img, stars, time } = r
                    return (
                        <Link to={`${LINK}${name}`} key={name}>
                            <div className="restaurant d-flex my-1" >
                                <img className='mx-1 rounded-3 img-restaurant-card' src={img} alt={name} />
                                <div className="d-flex flex-column justify-content-center 
                            gap-1
                            ms-3">
                                    <h5
                                        className='mb-0'>{name.toUpperCase()}</h5>
                                    <p className='mb-0'>{stars}</p>
                                    <p className='mb-0'>Work Time: {time}</p>
                                </div>
                            </div >
                        </Link>
                    )
                })
            }
        </>
    )

}

export default RestaurantsList