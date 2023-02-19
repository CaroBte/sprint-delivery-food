import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchEmpty } from "../components"

const FilteredList = ({ list }) => {

    const navigate = useNavigate()

    if (list && list.length === 0) return (
        <SearchEmpty />
    )

    return (
        <>
            {
                list && list.map((r) => {
                    let { name, category, price, img, restaurant } = r
                    const onClick = () => {
                        navigate(`restaurant/${restaurant}/${name}`)
                    }
                    return (

                        <div key={name} onClick={onClick} className='mb-1'>
                            <div className="restaurant d-flex mb-2 p-2 align-items-center">
                                <img className='mx-1 rounded-3' src={img} width={"18%"} alt={name} />
                                <div className="mx-2">
                                    <h6 className='mb-0'>{name.toUpperCase()} {category.toUpperCase()}</h6>
                                    <p className='mb-0 text-body-tertiary'>Price: $ {price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FilteredList