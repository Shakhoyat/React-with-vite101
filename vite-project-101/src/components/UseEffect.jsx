import React from 'react'
import { useEffect, useState } from 'react'

const UseEffect = () => {
    const [cnt, setcnt] = useState(0)
    useEffect(() => {
        document.title = `Count is ${cnt}`;
        console.log("Use Effect calling...");
    }, [cnt]);

    return (
        <div>
            <h1>
                {cnt}
            </h1>
            <button onClick={() => setcnt(cnt + 1)}>Increment</button>
            <button onClick={() => setcnt(cnt - 1)}>Decrement</button>
        </div>
    )
}

export default UseEffect