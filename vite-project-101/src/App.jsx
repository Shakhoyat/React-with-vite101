import React from 'react'
import Person from './Person'
import Shujon from './components/Test'
// Importing the Person component and Test component from the components directory
import Sohan from './components/Product'
import Product from './components/Product'
function App() {
  return (
    <>
      <Sohan />
      {/* <h1>Welcome to the Vite Project</h1>
      <p>This is a simple React application using Vite.</p>
      <p>Feel free to explore and modify the code!</p>
      <p>Enjoy coding with Vite!</p> */}
      <p>Happy coding!</p>
      {/* <Person /> */}
      <Shujon />
      <Product brand="Apple" name="iPhone 15 Pro Max" price={120000} />
      <Product brand="Google" name="Pixel 8 Pro" price={90000} />
      <Product brand="Nothing Phone" name="Nothing 7 pro" price={150000} />
    </>
  )
}

export default App