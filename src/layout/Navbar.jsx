import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <ul className='navbar-nav d-flex flex-row justify-content-evenlynpm s' >
                <li className='nav-item'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/search">Search</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/orders">Orders</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default Navbar