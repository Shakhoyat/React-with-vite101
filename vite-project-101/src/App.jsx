import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {
  const [cnt, setcnt] = useState(0)
  useEffect(() => {
    document.title = `Count is ${cnt}`;
    console.log("Use Effect calling...");
  }, [cnt]);

  return (
    <>
      <h1>
        {cnt}
      </h1>
      <button onClick={() => setcnt(cnt + 1)}>Increment</button>
      <button onClick={() => setcnt(cnt - 1)}>Decrement</button>

    </>
  )
}

export default App