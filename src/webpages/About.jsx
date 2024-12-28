import React from 'react';

import ID from '/assets/customID.png';

function About(){

    return(
        <>
        <body className='bg-blue-400 h-screen pb-[100px]'>
            <div className='grid md:grid-rows-2 grid-rows-[1fr, 2fr] h-full'>
                <div className='md:w-[400px] w-[350px] h-auto m-auto md:pt-[70px] pt-[80px]'>
                    <img src={ID} alt="" className='rounded-lg' />
                </div>

                <div className='grid md:grid-cols-4 md:grid-rows-none grid-cols-2 grid-rows-2'>
                    <div className='book-button book-left'></div>
                    <div className='book-button book-right'></div>
                    <div className='book-button book-left'></div>
                    <div className='book-button book-right'></div>
                </div>

            </div>
        </body>
        </>
    )
}

export default About