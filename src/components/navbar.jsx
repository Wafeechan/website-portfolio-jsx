import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import LogoMain from '/assets/logo_main_color.png'

function Navbar(){

return(
    <body className='w-full text-gray-700 font-serif'>
            <div className='m-0'> 
                <nav className="fixed top-0 left-0 z-10 w-full bg-white shadow-md">
                    <div className='container mx-auto flex items-center justify-between px-4 py-3'>
                        {/* Logo */}
                        <div className='flex items-center'>
                            <img src={LogoMain} alt="Logo" className='h-10 w-10'/> {/* src doesn't work properly, relies on import */}
                        </div>

                        {/* Navigation Links */}
                        <ul className='flex space-x-6 text-lg'>
                            <li>
                                <Link to="/" className='hover:text-blue-900 transition-colors'>Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className='hover:text-blue-900 transition-colors'>Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/about" className='hover:text-blue-900 transition-colors'>About</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                
            </div>
        </body>
        
)

}

export default Navbar