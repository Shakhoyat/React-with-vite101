import React from 'react'
import Person from './Person'
import { Test } from './components/Test'
// Importing the Person component and Test component from the components directory

function App() {
  return (
    <>
      <h1>Welcome to the Vite Project</h1>
      <p>This is a simple React application using Vite.</p>
      <p>Feel free to explore and modify the code!</p>
      <p>Enjoy coding with Vite!</p>
      <p>Happy coding!</p>
      {/* <Person /> */}
      <Test />
    </>
  )
}

export default App