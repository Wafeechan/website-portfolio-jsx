import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './webpages/Home.jsx';
// import Portfolio from './webpages/Portfolio.jsx';
// import About from './webpages/About.jsx';
// import Navbar from './components/navbar.jsx';
import './index.css';



function Main() {
  return (
  // <Router basename='web-portfolio'>
  //   <Navbar />
    
  //   <div className='bg-blue-500 text-white p-4'>Tailwind is working</div>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/portfolio" element={<Portfolio />} />
  //     <Route path="/about" element={<About />} />
  //   </Routes>
  // </Router>
  
  <div className='bg-blue-500 text-white p-4'>Tailwind is working</div>
  )
}

// Render the application into the DOM
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);