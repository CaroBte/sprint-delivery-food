import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { auth } from '../context';

const UserForm = () => {

    const { user, setUser, editUser } = useContext(auth.authContext)

    const { register, handleSubmit } = useForm({
        values: {
            displayName: user.displayName,
            id: user.uid,
            photoURL: user.photoURL,
            email: user.email
        }
    })

    const onSubmit = (_user) => {
        editUser(_user, _user.id)
    }

    return (
        <><Link to={"/profile"}>
            <i className="fa-solid fa-chevron-left ms-3"></i>
        </Link>
            <div className='form-user d-flex flex-column align-items-center mb-4'>
                <img className='img-profile' src={user.photoURL} alt={user.displayName} />
                <h5 className='mx-2 my-4'>Welcome!</h5>
                <h5>{user.displayName}</h5>
                <p className='mx-2 my-4'>Here you can upload your information</p>
                <form onSubmit={handleSubmit(onSubmit)} className='my-2 mx-2 w-100'>
                    <input disabled className='form-control mb-2' type="text" name="id"  {...register("id")} />
                    <input className='form-control mb-2' type="text" name="displayName"  {...register("displayName")} />
                    <input className='form-control mb-2' type="text" name="photoURL"  {...register("photoURL")} />
                    <input disabled className='form-control mb-2' type="text" name="email" {...register("email")} />
                    <button type="submit" className="btn btn-info w-50 mt-3">Send</button>
                </form>
            </div>
        </>
    )
}

export default UserForm