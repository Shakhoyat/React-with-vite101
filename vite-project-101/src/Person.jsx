//As the name was Capitalized, it was not recognized as a component.
import React from 'react'
import Superman from './Superman'
const Person = () => {
    const name = 'Skt'
    const age = 25
    const isLoggedIn = true
    const skills = ['JavaScript', 'React', 'Node.js']
    const user = {
        name: 'Skt',
        age: 25,
        isLoggedIn: true,
        skills: ['JavaScript', 'React', 'Node.js']
    }
    const product = {
        name: 'Laptop',
        model: 'Dell XPS 13',
        brand: 'Dell',
        category: 'Electronics',
        description: 'A high-performance laptop with a sleek design.',
        price: 1000,
        inStock: true
    }
    return (
        <>
            <Superman />
            <div>
                <h1>Name = {user.name}</h1>
                <h2>Age = {user.age}</h2>
                <h3>Is Logged In = {user.isLoggedIn ? 'Yes' : 'No'}</h3>
                <h4>Skills:</h4>
                <ul>
                    {user.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Product Details</h1>
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Model:</strong> {product.model}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>In Stock:</strong> {product.inStock ? 'Yes' : 'No'}</p>
            </div>
        </>
    )
}

export default Person