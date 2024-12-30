import React from 'react';
import { Link } from 'react-router-dom';

import ID from '/assets/customID.png';
import LogoBlue from '/assets/logo_blue2.png';

function About(){

    return(
        <>

        <div className='bg-blue-400 h-screen pb-[100px]'>
            <div className='grid md:grid-rows-2 grid-rows-[1fr, 2fr] gap-4 h-full'>
                <div className='md:w-[400px] w-[350px] h-auto m-auto md:pt-[140px] pt-[80px]'>
                    <img src={ID} alt="" className='rounded-lg' />
                </div>

                <div className='grid md:grid-cols-4 md:grid-rows-none grid-cols-2 grid-rows-2'>
                    <div className='px-[100px]'>
                        <Link to='/about-info' className='relative book-button book-left grid grid-rows-2 book-hover group'>
                            <div className='top-half-book'></div>
                            <div className='absolute translate logo-book z-10'><img src={LogoBlue} alt="" /></div>
                            <div></div>
                            <div className='book-text book-group-hover'>Education</div>
                        </Link>
                    </div>
                    <div className='px-[100px]'>
                        <Link to='/about-info' className='relative book-button book-left grid grid-rows-2 book-hover group'>
                            <div className='top-half-book'></div>
                            <div className='absolute translate logo-book z-10'><img src={LogoBlue} alt="" /></div>
                            <div></div>
                            <div className='book-text book-group-hover'>Experience</div>
                        </Link>
                    </div>
                    <div className='px-[100px]'>
                        <Link to='/about-info' className='relative book-button book-left grid grid-rows-2 book-hover group'>
                            <div className='top-half-book'></div>
                            <div className='absolute translate logo-book z-10'><img src={LogoBlue} alt="" /></div>
                            <div></div>
                            <div className='book-text book-group-hover'>Achievement</div>
                        </Link>
                    </div>
                    <div className='px-[100px]'>
                        <Link to='/about-info' className='relative book-button book-left grid grid-rows-2 book-hover group'>
                            <div className='top-half-book'></div>
                            <div className='absolute translate logo-book z-10'><img src={LogoBlue} alt="" /></div>
                            <div></div>
                            <div className='book-text book-group-hover'>Skills</div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default About