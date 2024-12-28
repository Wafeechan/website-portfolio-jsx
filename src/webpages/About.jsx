import React from 'react';

import ID from '/assets/customID.png';

function About(){

    return(
        <>
        <body className='bg-blue-400 h-screen'>
            <div className='grid grid-rows-2 h-full'>
                <div className='w-[400px] h-auto m-auto pt-[70px]'>
                    <img src={ID} alt="" className='rounded-lg' />
                </div>

                <div className='grid grid-cols-4'>
                    <div className='book-button'></div>
                    <div className='book-button'></div>
                    <div className='book-button'></div>
                    <div className='book-button'></div>
                </div>

            </div>
        </body>
        </>
    )
}

export default About