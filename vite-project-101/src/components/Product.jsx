import React from 'react'

const Product = () => {
    const obj = {
        name: "Samsung Galaxy S24 ultra",
        brand: "Samsung",
        price: 100,
        description: "Samsung Galaxy S24 ultra is a flagship smartphone with advanced features and specifications.",
        inStock: true,
    };
    return (
        <div>
            <h2>{obj.brand}</h2>
            <h3>{obj.name}</h3>
            <p><strong>Price:</strong> ${obj.price}</p>
        </div>
    )
}

export default Product