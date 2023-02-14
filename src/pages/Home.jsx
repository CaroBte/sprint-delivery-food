import React from 'react'
import promo1 from '../styles/promo1.png'
import promo2 from '../styles/promo2.png'

const Home = () => {
    return (
        <>
            <div className='ms-5 my-2 d-flex'>
                <i className="fa-solid fa-location-dot"></i>
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
            <p className='ms-5 my-2'>Restaurants and coffes</p>
            <div className='d-flex flex-row btns-filter'>
                <button className="btn btn-filter">All</button>
                <button className="btn btn-filter">🍝</button>
                <button className="btn btn-filter">🍕</button>
                <button className="btn btn-filter">🥗</button>
                <button className="btn btn-filter">🍔</button>
            </div>
            <div className="restaurant d-flex mb-2">
                <img className='mx-1 rounded-3' src="https://res.cloudinary.com/dif29zscp/image/upload/v1676259696/food-app-delivery-s4/Restaurants/Img_f00p5m.png" alt="" />
                <div className="restaurant-info">
                    <h6 className='restaurant-info-title mb-0'>Pardes Restaurant</h6>
                    <p className='restaurant-info-stars mb-0'>⭐⭐⭐⭐</p>
                    <p className='restaurant-info-schedule mb-0 '>Work time: 9:30 - 23:00</p>
                    <p className='restaurant-info-price mb-0'>Price: 4$</p>
                </div>
            </div>




        </>
    )
}

export default Home