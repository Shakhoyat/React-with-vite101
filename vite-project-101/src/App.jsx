import React from 'react'
import Home from './pages/Home';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <h1>Welcome to the App</h1>
    </div>
  )
}

export default App