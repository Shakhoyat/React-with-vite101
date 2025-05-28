import React from 'react'
import './laptop.css'; // Assuming you have a CSS file for styling
const Laptop = ({ brandname, model, price }) => {
    return (
        <div className='divv'>
            <h3>
                Brand: {brandname} <br />
                Model: {model} <br />
                Price: ${price}
            </h3>
        </div>
    )
}
export default Laptop