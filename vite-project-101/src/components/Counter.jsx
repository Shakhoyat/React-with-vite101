import React, { useState } from 'react'

const Counter = () => {
    const [cnt, setCnt] = useState(0);
    const increment = () => {
        setCnt(cnt + 1);
        console.log("Count val = ", cnt);
    };
    const decrement = () => {
        setCnt(cnt - 1);
        console.log("Count val = ", cnt);
    };
    return (
        <div>
            <h1>{cnt}</h1>
            <button onClick={increment}>Inc.</button>
            <button onClick={decrement}>Dec.</button>
        </div>
    )
}

export default Counter