import React, { useEffect } from 'react';

function Modal({ isOpen, onClose, image, title, text }) {
  useEffect(() => {
    // Prevent background scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = ''; // Reset on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-none w-[90%] max-w-[830px] max-h-[90vh] overflow-y-auto p-6 relative shadow-lg rounded-md">
        <button
          onClick={onClose}
          className="absolute top-5 left-0 text-white hover:text-gray-800 text-2xl font-bold"
        >
          X
        </button>

        {/* Modal Content */}
        <img src={image} alt="Modal Content" className="h-[500px] w-full rounded mb-4 shadow-sm object-cover" />
        <h2 className="text-center text-white text-3xl md:text-4xl font-Inter font-semibold mt-4">
          {title}
        </h2>
        <p className="text-justify mt-4 text-white font-Inter font-light md:text-base text-sm">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Modal;
