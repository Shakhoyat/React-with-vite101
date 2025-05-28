import React from 'react'

const Product = (props) => {

    return (
        <div>
            <h2>{props.brand}</h2>
            <h3>{props.name}</h3>
            <p><strong>Price:</strong> ${props.price}</p>
        </div>
    )
}

export default Product