import React, { useContext } from 'react'
import logo from '../styles/logo.png'
import { authApi } from '../api'
import { auth } from "../context"

const Login = () => {

    const handleLogin = () => {
        authApi.login()
    }

    return (
        <>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-column align-items-center gap-5 mb-5'>
                    <img src={logo} alt="logo" width={"30%"} />
                    <h2 className='text-login'>Log in</h2>
                    <h5 className='text-login mb-5'>Login or create an account with your
                        email to start ordering</h5>
                </div>
                <div className='login'>
                    <p className='m-0 ms-4'>By clicking the button next you accept</p>
                    <p className='ms-4'>Terms of use</p>
                    <button onClick={handleLogin} id='btn-login' className='btn mx-4 btn-yellow'> <strong>Login</strong></button>
                </div>
            </div>
        </>
    )
}

export default Login