import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { authApi } from '../api'
import { auth } from '../context'

const Profile = () => {

    const navigate = useNavigate()
    const { user } = useContext(auth.authContext)

    const handleLogout = () => {
        authApi.logout()
        navigate("/")
    }

    const edit = () => {
        navigate(`/${user.uid}`)
    }

    return (
        <>
            <div className='align-items-center d-flex flex-column'>
                <img className='img-profile' src={user.photoURL} alt={user.displayName} />
                <h5 className='mt-2'>{user.displayName}</h5>
            </div>
            <div onClick={edit} className="profile-items d-flex flex-row align-items-center py-2">
                <i className="fa-regular fa-user"></i>
                <p className='text-profile-items'>Account edit</p>
                <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="profile-items d-flex flex-row align-items-center py-2">
                <i className="fa-solid fa-wallet"></i>
                <p className='text-profile-items'>Payment</p>
                <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="profile-items d-flex flex-row align-items-center py-2">
                <i className="fa-solid fa-globe"></i>
                <p className='text-profile-items'>Languaje</p>
                <span className='eng'>ENG</span>
            </div>
            <div className="profile-items d-flex flex-row align-items-center py-2">
                <i className="fa-solid fa-location-dot"></i>
                <p className='text-profile-items'>Location</p>
                <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="profile-items d-flex flex-row align-items-center py-2">
                <i className="fa-regular fa-circle-question"></i>
                <p className='text-profile-items'>FAQ</p>
                <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="profile-items d-flex flex-row align-items-center py-2">
                <i className="fa-solid fa-phone"></i>
                <p className='text-profile-items'>Support</p>
                <i className="fa-solid fa-angle-right"></i>
            </div>
            <button className='btn btn-yellow w-75 ms-5 mt-4'
                onClick={handleLogout}>Logout</button>
        </>

    )
}

export default Profile