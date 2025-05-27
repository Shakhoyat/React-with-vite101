import React from 'react'

const App = () => {
  const name= 'Skt'
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
  )
}

export default App