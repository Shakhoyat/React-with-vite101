import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App