import React from 'react';

function Modal({ isOpen, onClose, image, title, text }) {
    if (!isOpen) return null;

    return(
        <div className='fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center z-50'>
            <div className='bg-white w-[830px] h-[500px] p-6 relative shadow-lg mt-[50px] z-50'>
                <button
                    onClick={onClose}
                    className='absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl font-bold'
                >X</button>

                {/* Modal content */}
                <img src={image} alt="Modal Content" className='w-full h-full object-cover shadow-sm' />
                <h2 className='text-center text-white text-4xl font-Inter font-semibold mt-10'>{title}</h2>
                <p className='text-center mt-4 text-white font-Inter font-light'>{text}</p>
            </div>
        </div>

    );

}

export default Modal;