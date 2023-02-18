import React from 'react'

const InfoRestaurant = ({ actRestaurant }) => {
    return (

        <div className="restaurant d-flex m-2 align-items-center">
            <img className='img-restaurant-detail mx-1 rounded-3' src={actRestaurant.img} alt="" />
            <div className="restaurant-info-detail mx-3">
                <h6 className='w-100 text-align-center my-1'>{actRestaurant.name.toUpperCase()}</h6>
                <p className='my-1 fw-lighter'>{actRestaurant.description}</p>
                <p className='my-1'>{actRestaurant.stars}</p>
                <p className='my-1 fw-lighter'>Work time: {actRestaurant.time}</p>
            </div>
        </div>
    )
}

export default InfoRestaurant