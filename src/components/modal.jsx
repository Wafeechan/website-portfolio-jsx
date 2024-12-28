import React from 'react';

function Modal({ isOpen, onClose, image, title, text }) {
    if (!isOpen) return null;

    return(
        <div className='fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center z-50'>
            <div className='bg-white md:w-[830px] md:h-[500px] w-[500px] h-[280px] p-6 relative shadow-lg mt-[50px] z-50'>
                <button
                    onClick={onClose}
                    className='absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl font-bold'
                >X</button>

                {/* Modal content */}
                <img src={image} alt="Modal Content" className='w-full h-full object-cover shadow-sm' />
                <h2 className='text-center text-white md:text-4xl text-3xl font-Inter font-semibold mt-10'>{title}</h2>
                <p className='text-justify mt-4 text-white font-Inter font-light md:text-base text-sm'>{text}</p>
            </div>
        </div>

    );

}

export default Modal;