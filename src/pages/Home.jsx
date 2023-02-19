import React, { useContext, useEffect, useState } from 'react'
import promo1 from '../styles/promo1.png'
import promo2 from '../styles/promo2.png'
import { restaurant } from '../context'
import RestaurantsList from '../components/RestaurantsList'

const Home = () => {

    const { restaurants, getRestaurants } = useContext(restaurant.restaurantContext)

    const [restLocal, setRestLocal] = useState()

    useEffect(() => {
        if (!restaurants) {
            getRestaurants()
        }
        setRestLocal(restaurants)
    }, [restaurants])

    const filter = (_category) => {

        if (_category === "all") {
            setRestLocal(restaurants)
        } else {
            let filterRestaurants = restaurants.filter(({ category }) => {
                return category.includes(_category)
            })
            setRestLocal(filterRestaurants)
        }
    }

    return (
        <>

            <div className='ms-5 my-2 d-flex'>
                <i id='location' className="fa-solid fa-location-dot"></i>
                <div>
                    <p className='m-0 ms-2 text-direction'>DELIVER TO</p>
                    <p className='m-0 ms-2 text-direction'>P.SHERMAN CALLE WALLABY 42 SIDNEY</p>
                </div>
            </div>
            <div id="carouselPromo" className="carousel slide mx-5">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={promo1} className="d-block" alt="promo" />
                    </div>
                    <div className="carousel-item">
                        <img src={promo2} className="d-block" alt="promo" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselPromo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselPromo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h5 className='ms-3 my-3'>Restaurants and coffes</h5>
            <div className='d-flex flex-row btns-filter'>
                <button onClick={() => filter("all")} className="btn btn-filter">All</button>
                <button onClick={() => filter("pasta")} className="btn btn-filter">🍝</button>
                <button onClick={() => filter("pizza")} className="btn btn-filter">🍕</button>
                <button onClick={() => filter("salad")} className="btn btn-filter">🥗</button>
                <button onClick={() => filter("burguer")} className="btn btn-filter">🍔</button>
                <button onClick={() => filter("ice-cream")} className="btn btn-filter">🍨</button>
            </div>

            {restLocal ? (
                <>
                    <div className="d-flex flex-column mb-5 mt-2 gap-1 mx-2">
                        <RestaurantsList list={restLocal} />
                    </div>
                </>
            ) :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-warning mt-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
        </>
    )
}

export default Home