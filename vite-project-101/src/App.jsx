import React from 'react'
import Person from './Person'
import Shujon from './components/Test'
// Importing the Person component and Test component from the components directory
import Sohan from './components/Product'
import Product from './components/Product'
import Person2 from './components/Person2'
import Person3 from './components/Person3'
import Laptop from './components/Laptop'
import Events from './components/Events'


function App() {
  return (
    <>
      <div>
        <Sohan />
        {/* <h1>Welcome to the Vite Project</h1>
      <p>This is a simple React application using Vite.</p>
      <p>Feel free to explore and modify the code!</p>
      <p>Enjoy coding with Vite!</p> */}
        <p>Happy coding!</p>
        {/* <Person /> */}
        <Shujon />
      </div>
      <div>{
    /* <Product brand="Apple" name="iPhone 15 Pro Max" price={120000} />
      <Product brand="Google" name="Pixel 8 Pro" price={90000} />
      <Product brand="Nothing Phone" name="Nothing 7 pro" price={150000} /> */}
      </div>
      <div>
        {/* <Person2 name="shujon" age={23} salary={10000} />
        <Person2 name="sohan" age={19} salary={20000} />
        <Person2 name="saki" age={15} salary={30000} />
        <Person2 name="tanvir" age={14} salary={40000} /> */}
      </div>
      <div>
        {/* <Person3 name="Roman" age={16} pancard={true} /> */}
      </div>
      <div>
        {/* <Laptop brandname="hp" model="probook" price={120000} />
        <Laptop brandname="Dell" model="XPS 13" price={150000} />
        <Laptop brandname="Apple" model="MacBook Pro" price={250000} /> */}
      </div>
      <Events />
    </>
  )
}

export default App