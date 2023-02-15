import React from 'react'
import { useNavigate } from 'react-router'
import { authApi } from '../api'

const Profile = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        authApi.logout()
        navigate("/")

    }
    return (
        <div>Profile
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
        </div>
    )
}

export default Profile