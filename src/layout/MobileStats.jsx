import React from 'react'
import { Outlet } from 'react-router-dom'


const MobileStats = () => {
    return (
        <>
            <div className='d-flex flex-row justify-content-between align-items-center mx-4 my-2'>
                <p className='m-0 '> <strong></strong>9:41</p>
                <div className='d-flex gap-2'>
                    <i className="fa-solid fa-signal"></i>
                    <i className="fa-solid fa-wifi"></i>
                    <i className="fa-solid fa-battery-full"></i>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default MobileStats