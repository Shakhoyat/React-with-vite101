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
  return (
    <div>
      <h1>MERN Development</h1>
      <h2>{name}</h2>
      <p>age = {age}</p>
      <h3>Im learning React.js...My other skills are:</h3>
      <h3>{skills}</h3>
      <h1>2+5</h1>
      <h1>{2+5}</h1>
    </div>
  )
}

export default App