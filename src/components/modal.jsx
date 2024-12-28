import React from 'react';

function Modal({ isOpen, onClose, image, title, text }) {
    if (!isOpen) return null;

    return(
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white w-[600px] h-[400px] p-6 rounded-lg relative shadow-lg'>
                <button
                    onClick={onClose}
                    className='absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl font-bold'
                >&times</button>

                {/* Modal content */}
                <img src={image} alt="Modal Content" className='w-full h-[200px] object-cover rounded-md' />
                <h2 className='text-2xl font-bold mt-4'>{title}</h2>
                <p className='mt-2 text-gray-600'>{text}</p>
            </div>
        </div>

    );

}

export default Modal;