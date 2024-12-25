import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function navbar(){

return(
    <body className='w-full text-white font-serif'>
            <div className='m-0'> 
                
                <nav className='fixed top-0 left-0 z-10 h-max w-full items-center rounded-none px-4 py-2 md:py-2 lg:px-8 lg:py-4 bg-gray-50/30 backdrop-blur-md backdrop-brightness-10 flex justify-between'>
                    <div className='flex items-center logo-container'>
                        <div className="logo"></div>
                    </div>
                    <div className="flex items-center justify-end text-blue-gray-900">
                        <ul className='flex space-x-4 my-2 lg:my-4'>
                            <li className=' navBtn'>
                                <Link to="/" className='nav-link navHover text-3xl'>Home</Link>
                            </li>
                            <li className='navBtn'>
                                <Link to="/portfolio" className='nav-link navHover text-3xl'>Portfolio</Link>
                            </li >
                            <li className='navBtn'>
                                <Link to="/about" className='nav-link navHover text-3xl'>About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </div>
        </body>
        
)

}

export default navbar