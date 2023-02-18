import React from 'react'

const DishesList = ({ list }) => {

    return (
        <>
            <div className='d-flex flex-wrap'>
                {list && list.map((d => {
                    let { name, price, img, category } = d
                    return (
                        <div className='dish-card rounded-4' key={name}>
                            <img className='dish-img rounded-4' src={img} alt={name} />
                            <p className='text-dishes m-1'>{name.toUpperCase()} <br /> {category.toUpperCase()}</p>
                            <p className='text-dishes m-1'>${price}</p>
                        </div>

                    )

                }))

                }
            </div>


        </>
    )
}

export default DishesList