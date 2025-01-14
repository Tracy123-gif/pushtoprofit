import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/sections/Footer';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
     <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
     
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
