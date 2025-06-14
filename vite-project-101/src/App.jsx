import React from 'react'
import Home from './pages/Home';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Contact from './pages/Contact';
import About from './pages/About';
import Course_Details from './pages/Course_Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav_bar from './components/Nav_bar';
import Dashbord from './pages/Dashbord';
import Profile from './pages/Profile';
import Bdgovt from './Home/Bdgovt';

const App = () => {
  return (
    <div>
      <Router>
        <Nav_bar />
        <Routes>
          <Route path="/" element={<Bdgovt />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses/:id" element={<Course_Details />} />
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <h1>Welcome to the App</h1>
    </div>
  )
}

export default App