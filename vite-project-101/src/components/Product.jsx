import React from 'react'

const Product = ({ brand, name, price }) => {

    return (
        <div>
            <h2>{brand}</h2>
            <h3>{name}</h3>
            <p><strong>Price:</strong> ${price}</p>
        </div>
    )
}

export default Product