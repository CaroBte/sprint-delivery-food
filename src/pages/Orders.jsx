import React, { useContext } from 'react'
import { OrdersEmpty } from '../components/'
import { restaurant } from '../context'
import { Link } from 'react-router-dom'


const Orders = () => {

    const { order, setOrder } = useContext(restaurant.restaurantContext)

    if (order.length === 0) {
        return <OrdersEmpty />
    }

    const eraseOrders = () => {
        setOrder([])
    }

    return (

        <div className='d-flex flex-column orders-container'>
            <h4 className='text-center fw-bolder my-4'>Your current orders</h4>
            {
                order && order.map((o) => {
                    let { name, img, restaurant, total, category, quantity } = o
                    return (
                        <div key={name} className='mb-1 rounded-3'>
                            <div className="restaurant d-flex mb-2 p-2 align-items-center">
                                <img className='mx-1 rounded-3' src={img} width={"18%"} alt={name} />
                                <div className="mx-4">
                                    <h5 className='mb-2'>{restaurant.toUpperCase()}</h5>
                                    <h6 className='mb-2'>{name.toUpperCase()} {category.toUpperCase()} x {quantity}</h6>
                                    <p className='mb-0 text-body-tertiary'>Total: $ {total}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Link to="/">
                <button className="btn btn-yellow btn-keep-buying">Keep buying</button>
            </Link>
            <div>
                <button onClick={eraseOrders} className="btn btns-erase">Erase all your orders</button>
            </div>
        </div>
    )
}

export default Orders