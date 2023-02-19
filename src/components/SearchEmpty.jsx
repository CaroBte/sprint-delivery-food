import React from 'react'
import notfound from "../styles/notfound.png"

const SearchEmpty = () => {
    return (
        <div className='d-flex search-empty m-auto align-items-center flex-column w-75 gap-5'>
            <img className='my-5' src={notfound} alt="not found" />
            <h5>Not found</h5>
        </div>
    )
}

export default SearchEmpty