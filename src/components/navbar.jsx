import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '/src/index.css';
import LogoMain from '/assets/logo_main_color.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full text-gray-700 font-Inter">
      <div className="m-0">
        <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
          <div className="w-full md:w-[95%] mx-auto flex items-center justify-between px-4 my-auto">
            {/* Logo */}
            <div className="flex items-center">
              <img src={LogoMain} alt="Logo" className="h-16 md:h-24 w-full my-2" />
              <div className="logo-text text-logoBlue">Wafee</div>
              <div className="logo-text">chan</div>
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center text-gray-700 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-12 text-2xl md:text-3xl absolute md:static top-20 left-0 bg-white w-full md:w-auto shadow-md md:shadow-none`}
            >
              <li className="border-b md:border-none">
                <Link
                  to="/"
                  className="nav-link block md:inline-block py-4 md:py-0 px-4 md:px-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="border-b md:border-none">
                <Link
                  to="/portfolio"
                  className="nav-link block md:inline-block py-4 md:py-0 px-4 md:px-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li className="border-b md:border-none">
                <Link
                  to="/about"
                  className="nav-link block md:inline-block py-4 md:py-0 px-4 md:px-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
