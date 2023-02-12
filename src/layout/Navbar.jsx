import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <ul id="navbar" className='navbar-nav d-flex flex-row justify-content-around' >
                <li className='nav-item'>
                    <Link className='nav-link' to="/"><i className="fa-solid fa-house"></i></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/orders"><i className="fa-solid fa-clock-rotate-left"></i></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/profile"><i className="fa-regular fa-user"></i></Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default Navbar