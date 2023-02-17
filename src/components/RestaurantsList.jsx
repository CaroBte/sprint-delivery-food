import React from 'react'

const RestaurantsList = ({ list }) => {

    return (
        <>
            {
                list && list.map((r) => {
                    let { name, img, stars, time } = r
                    return (
                        <div key={name} className="restaurant d-flex my-1" >
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
                    )
                })
            }
        </>
    )

}

export default RestaurantsList