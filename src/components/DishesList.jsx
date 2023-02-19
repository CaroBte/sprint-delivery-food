import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

const DishesList = ({ list }) => {

    const { idR } = useParams()

    const LINK = `/restaurant/${idR}/`

    return (
        <>
            <div className='d-flex flex-wrap'>
                {
                    list && list.map((d => {
                        let { name, price, img, category } = d
                        return (
                            <Link key={name} to={`${LINK}${name}`} className='dish-card rounded-4'>
                                <img className='dish-img rounded-4' src={img} alt={name} />
                                <p className='text-dishes m-1'>{name.toUpperCase()} <br /> {category.toUpperCase()}</p>
                                <p className='text-dishes m-1'>${price}</p>
                            </Link>
                        )
                    }))
                }
            </div>


        </>
    )
}

export default DishesList