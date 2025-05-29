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
import Counter from './components/Counter'
import ShowProducts from './components/ShowProducts'
import FilterProduct from './components/FilterProduct'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    console.log("Use Effect calling...");
  }, []);
  return (
    <>
      <h1>Learning UseEffect</h1>
    </>
  )
}

export default App