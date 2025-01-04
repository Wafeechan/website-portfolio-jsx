import React from 'react';
import { Link } from 'react-router-dom';

import ID from '/assets/customID.png';
import LogoBlue from '/assets/logo_blue2.png';

function About(){

    return(
        <>

        <div className='bg-blue-400 h-full md:pb-[50px] pb-[200px]'>
            <div className='grid md:grid-rows-[4fr,3fr] grid-rows-[1fr,2fr] gap-4 h-screen'>
                <div className='flex justify-center items-center h-full mt-[120px]'>
                    <div className='w-auto h-full max-w-full max-h-full'>
                        <img src={ID} alt="" className='rounded-lg md:w-[500px] w-[300px] h-auto object-contain' />
                    </div>
                    
                </div>

                <div className='grid md:grid-cols-4 md:grid-rows-none grid-cols-2 grid-rows-2 md:gap-[100px] gap-[50px]'>
                    <div className='book-space'>
                        <Link 
                            to='/about-info' 
                            state={{ index:0 }} 
                            className='relative book-button book-left grid grid-rows-[3fr,1fr] book-hover group'
                        >
                            {/* Centered White Background */}
                            <div className='top-half-book flex items-center justify-center'>
                            <img src={LogoBlue} alt="" className='logo-book absolute' />
                            </div>

                            {/* Spacer Div for Proper Positioning */}
                            <div></div>

                            {/* Text Positioned at 3/4th */}
                            <div className='book-text book-group-hover flex items-end justify-center'>
                                Education
                            </div>
                        </Link>
                    </div>
                    <div className='book-space'>
                        <Link 
                            to='/about-info' 
                            state={{ index:3 }}
                            className='relative book-button book-left grid grid-rows-[3fr,1fr] book-hover group'
                        >
                            {/* Centered White Background */}
                            <div className='top-half-book flex items-center justify-center'>
                            <img src={LogoBlue} alt="" className='logo-book absolute' />
                            </div>

                            {/* Spacer Div for Proper Positioning */}
                            <div></div>

                            {/* Text Positioned at 3/4th */}
                            <div className='book-text book-group-hover flex items-end justify-center'>
                                Experience
                            </div>
                        </Link>
                    </div>
                    <div className='book-space'>
                        <Link 
                            to='/about-info' 
                            state={{ index:6 }}
                            className='relative book-button book-left grid grid-rows-[3fr,1fr] book-hover group'
                        >
                            {/* Centered White Background */}
                            <div className='top-half-book flex items-center justify-center'>
                            <img src={LogoBlue} alt="" className='logo-book absolute' />
                            </div>

                            {/* Spacer Div for Proper Positioning */}
                            <div></div>

                            {/* Text Positioned at 3/4th */}
                            <div className='book-text book-group-hover flex items-end justify-center'>
                                Achievement
                            </div>
                        </Link>
                    </div>
                    <div className='book-space'>
                        <Link 
                            to='/about-info' 
                            state={{ index:7 }}
                            className='relative book-button book-left grid grid-rows-[3fr,1fr] book-hover group'
                        >
                            {/* Centered White Background */}
                            <div className='top-half-book flex items-center justify-center'>
                            <img src={LogoBlue} alt="" className='logo-book absolute' />
                            </div>

                            {/* Spacer Div for Proper Positioning */}
                            <div></div>

                            {/* Text Positioned at 3/4th */}
                            <div className='book-text book-group-hover'>
                                Skills
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default About