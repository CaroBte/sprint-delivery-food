import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { restaurant as restContext } from '../context'

const InfoDish = ({ actDish }) => {

    let { name, img, category, time, description, price, restaurant } = actDish

    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(price)
    const { order, setOrder } = useContext(restContext.restaurantContext)

    const add = () => {
        setQuantity(quantity + 1)
    }

    const remove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        setTotal(quantity * price)
    }, [quantity])

    let navigate = useNavigate()

    const createOrder = () => {
        const newOrder = {
            name: name,
            img: img,
            restaurant: restaurant,
            total: total,
            category: category,
            quantity: quantity
        }
        setOrder(order => [...order, newOrder])
        navigate("/orders")
    }


    return (
        <div className='dish-info d-flex flex-column px-4'>
            <img className='img-info-dish mb-4 rounded-3' src={img} alt={name} />
            <h6 className='mb-3'><strong>{name.toUpperCase()} {category.toUpperCase()}  </strong> <span className='text-time-dish'>
                <i className="fa-regular fa-clock me-3"></i>
                {time}</span></h6>
            <p className='me-2'>{description}</p>
            <div className='d-flex btns-dish-info'>
                <div className="input-group rounded-2 ">
                    <button onClick={add} className="btn">+</button>
                    <input disabled type="text" className="form-control" value={quantity} />
                    <button onClick={remove} className="btn">-</button>
                </div>
                <button onClick={createOrder}
                    className='btn btn-yellow d-flex justify-content-around btn-add'><span className='add-text-dish'>Add</span> ${total}
                </button>
            </div>
        </div>
    )
}

export default InfoDish