import React from 'react'

const InfoDish = ({ actDish }) => {

    let { name, img, category, time, description, price } = actDish



    return (
        <div className='dish-info d-flex flex-column px-4'>
            <img className='img-info-dish mb-4 rounded-3' src={img} alt={name} />
            <h6 className='mb-3'><strong>{name.toUpperCase()} {category.toUpperCase()}  </strong> <span className='text-time-dish'>
                <i className="fa-regular fa-clock me-3"></i>
                {time}</span></h6>
            <p className='me-2'>{description}</p>
            <div className='d-flex btns-dish-info'>
                <div className="input-group rounded-2 ">
                    <button className="btn">+</button>
                    <input type="text" className="form-control" />
                    <button className="btn">-</button>
                </div>
                <button className='btn btn-yellow d-flex justify-content-around btn-add'><span className='add-text-dish'>Add</span> ${price}
                </button>
            </div>
        </div>
    )
}

export default InfoDish