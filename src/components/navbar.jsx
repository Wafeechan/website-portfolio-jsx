import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '/src/index.css';
import LogoMain from '/assets/logo_main_color.png';

function Navbar(){

return(
    <body className='w-full text-gray-700 font-Inter'>
            <div className='m-0'> 
                <nav className="fixed top-0 left-0 z-10 w-full bg-white shadow-md">
                    <div className='container mx-auto flex items-center justify-between px-4 my-auto'>
                        {/* Logo */}
                        <div className='flex items-center'>
                            <img src={LogoMain} alt="Logo" className='h-24 w-full my-2'/> {/* src doesn't work properly, relies on import */}
                        </div>

                        {/* Navigation Links */}
                        <ul className='flex space-x-12 text-3xl'>
                            <li>
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className='nav-link'>Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/about" className='nav-link'>About</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                
            </div>
        </body>
        
)

}

export default Navbar