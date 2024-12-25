import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './Home.jsx';
//import Portfolio from './Portfolio.jsx';
//import About from './About.jsx';
import Navbar from '/src/components/navbar.jsx';
import './index.css';



function Main() {
  return (
  <Router basename="/wafi-portfolio">
    <Navbar />

    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
    </Routes> */}
  </Router>
  )
}

// Render the application into the DOM
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);