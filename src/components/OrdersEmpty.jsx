import React from 'react'
import { Link } from 'react-router-dom'
import notfound from "../styles/notfound.png"

const OrdersEmpty = () => {

    return (

        <div className='d-flex search-empty m-auto my-3 align-items-center flex-column w-75 gap-5'>
            <img className='my-5' src={notfound} alt="not found" />
            <h5>You dont have any order yet</h5>
            <h6 className='text-center'>Check our restaurants and pick something!</h6>
            <Link className='w-75' to="/">
                <button className="btn btn-yellow w-100">Home</button>
            </Link>
        </div>
    )
}

export default OrdersEmpty