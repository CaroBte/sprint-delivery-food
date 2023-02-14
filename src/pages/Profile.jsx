import React from 'react'
import { authApi } from '../api'

const Profile = () => {

    const handleLogout = () => {
        authApi.logout()
    }
    return (
        <div>Profile
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
        </div>
    )
}

export default Profile