import React from 'react'

const Counter = () => {
    let count = 0;
    const increment = () => {
        count++;
        console.log("Count val = ", count);
    };
    const decrement = () => {
        count--;
        console.log("Count val = ", count);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Inc.</button>
            <button onClick={decrement}>Dec.</button>
        </div>
    )
}

export default Counter