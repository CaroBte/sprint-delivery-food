import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { auth } from "../context"
import { Login } from '../pages/'




const Navbar = () => {

    const { user } = useContext(auth.authContext)

    if (!user) return (<Login />)

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