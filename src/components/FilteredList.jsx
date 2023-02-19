import React from 'react'
import { SearchEmpty } from "../components"

const FilteredList = ({ list }) => {


    if (list && list.length === 0) return (
        <SearchEmpty />
    )

    return (
        <>
            {
                list && list.map((r) => {
                    let { name, category, price, img } = r
                    return (
                        <div key={name} className='restaurants-section mb-3'>
                            <div className="restaurant d-flex mb-2 align-items-center">
                                <img className='mx-1 rounded-3' src={img} width={"18%"} alt={name} />
                                <div className="mx-2">
                                    <h6 className='mb-0'>{name.toUpperCase()} {category.toUpperCase()}</h6>
                                    <p className='mb-0 text-body-tertiary'>Price: $ {price}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </>
    )
}

export default FilteredList