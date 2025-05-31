import React from 'react'

const Courses = () => {
    const arr = [
        { id: 1, name: "MERN stack", price: 15000, duration: '5 months' },
        { id: 2, name: "Python Full Stack", price: 12000, duration: '4 months' },
        { id: 3, name: "Java Full Stack", price: 18000, duration: '6 months' },
        { id: 4, name: "Data Science", price: 20000, duration: '7 months' }
    ];
    return (
        <div>
            <h1>Courses Page</h1>
            <ul>
                {arr.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} - {item.duration}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Courses