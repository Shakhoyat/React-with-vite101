import React from 'react'

const FilterProduct = () => {
    const products = [
        { id: 1, brand: "Apple", name: "iPhone 15 Pro Max", category: "smartphone", price: 120000 },
        { id: 2, brand: "Google", name: "Pixel Note Pro", category: "Tablets", price: 90000 },
        { id: 3, brand: "Hp", name: "Hp pro", category: "Laptop", price: 150000 },
        { id: 4, brand: "Sony", name: "Sony Xperia 5", category: "Camera", price: 180000 },
    ];
    const FilteredProduct = products.filter(product => product.category === "smartphone");
    return (
        <div>
            {FilteredProduct
                .map((product) => (
                    <div key={product.id}>
                        <h2>{product.brand} - {product.name}</h2>
                        <p>Price: Tk {product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default FilterProduct