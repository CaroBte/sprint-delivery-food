import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <h1>Navbar</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default Navbar