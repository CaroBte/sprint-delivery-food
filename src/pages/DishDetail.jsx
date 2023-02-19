import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { restaurant } from '../context/'
import { InfoDish } from '../components/'

const DishDetail = () => {

    const { actDish, getDish, setActDish } = useContext(restaurant.restaurantContext)

    const { idR, idD } = useParams()
    const LINK = `/restaurant/${idR}/`

    useEffect(() => {

        if (idD) {
            setActDish(null)
            getDish(idR, idD)
        }
    }, [idD])

    return (

        <>
            <Link to={LINK}>
                <i className="fa-solid fa-chevron-left ms-3"></i>
            </Link >
            {
                actDish ?
                    (
                        <>
                            <InfoDish actDish={actDish} />
                        </>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-warning mt-5" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default DishDetail