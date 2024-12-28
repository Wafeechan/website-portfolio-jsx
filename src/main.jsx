import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './webpages/Home.jsx';
import Portfolio from './webpages/Portfolio.jsx';
import About from './webpages/About.jsx';
import AboutInfo from './webpages/About-info.jsx';
import Navbar from './components/navbar.jsx';
import './index.css';
import Bottombar from './components/bottombar.jsx';



function Main() {
  return (
  <Router basename='website-portfolio-jsx'>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/about" element={<AboutInfo />} />
    </Routes>

    <Bottombar />
  </Router>

  )
}

// Render the application into the DOM
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);