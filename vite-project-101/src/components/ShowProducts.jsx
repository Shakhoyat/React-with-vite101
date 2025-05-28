import React from 'react'
//Array er vitor object thakle Map use kore display kora hoy
const ShowProducts = () => {
    let products = [
        { id: 1, brand: "Apple", name: "iPhone 15 Pro Max", price: 120000 },
        { id: 2, brand: "Google", name: "Pixel 8 Pro", price: 90000 },
        { id: 3, brand: "Nothing Phone", name: "Nothing 7 pro", price: 150000 }
    ];
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.brand} - {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowProducts