import React from 'react';

import ID from '/assets/customID.png';

function About(){

    return(
        <>
        <body className='bg-blue-400 h-screen pb-[100px]'>
            <div className='grid md:grid-rows-2 grid-rows-[1fr, 2fr] h-full'>
                <div className='md:w-[400px] w-[350px] h-auto m-auto md:pt-[140px] pt-[80px]'>
                    <img src={ID} alt="" className='rounded-lg' />
                </div>

                <div className='grid md:grid-cols-4 md:grid-rows-none grid-cols-2 grid-rows-2'>
                    <div className='relative book-button book-left grid grid-rows-2 book-hover group'>
                        <div className='top-half-book'></div>
                        <div></div>
                        <div className='book-text book-group-hover'>Education</div>
                    </div>
                    <div className='relative book-button book-right grid grid-rows-2 book-hover group'>
                        <div className='top-half-book'></div>
                        <div></div>
                        <div className='book-text book-group-hover'>Experience</div>
                    </div>
                    <div className='relative book-button book-left grid grid-rows-2 book-hover group'>
                        <div className='top-half-book'></div>
                        <div></div>
                        <div className='book-text book-group-hover'>Achievement</div>
                    </div>
                    <div className='relative book-button book-right grid grid-rows-2 book-hover group'>
                        <div className='top-half-book'></div>
                        <div></div>
                        <div className='book-text book-group-hover'>Skills</div>
                    </div>
                </div>

            </div>
        </body>
        </>
    )
}

export default About