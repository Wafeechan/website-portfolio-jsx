import React, {useState} from 'react';
import ImageSlider from '/src/components/imageSlider.jsx';
import Modal from '/src/components/modal.jsx'

import { images, titles, texts } from './portfolio'

function Portfolio() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-blue-400 h-[120vh] w-screen-lg pt-[150px]">
      <div className=" items-center relative">
        {/* Title */}
        <div className="font-Inter text-3xl sm:text-4xl md:text-5xl text-center mb-[20px] text-white font-bold">Portfolio</div>

        <div className=' mx-auto bg-blue-600 md:w-[850px] md:h-[30px] sm:w-[520px] sm:h-[20px] w-[300px] h-[15px] z-20 relative'/>  

        {/* Image Slider with Background */}
        <div className="relative w-full flex justify-center pb-[200px]">

            {/* Rectangle Background */}
            <div className="absolute top-[0px] bg-white md:w-[830px] md:h-[500px] sm:w-[510px] sm:h-[320px] w-[290px] h-[200px] shadow-lg z-0"></div>
          
            {/* Image Slider */}
            <div className="relative sm:mt-[10px] mt-[5px] md:w-[800px] md:h-[450px] sm:w-[500px] sm:h-[280px] w-[270px] h-[190px] object-contain z-10">
                {/* Modal trigger */}
                <button 
                  onClick={openModal} 
                  className='absolute z-10 items-center justify-center sm:mt-[10px] mt-[5px] md:w-[800px] md:h-[450px] sm:w-[500px] sm:h-[280px] w-[270px] h-[190px] bottom-1 object-contain'
                >
                  <ImageSlider images={images} width="100%" height="100%" onSlideChange={(index) => setCurrentImageIndex(index)} onImageClick={(currentIndex) => openModal(currentIndex)}/>
                </button>

                
                <div className='absolute md:w-[150px] md:h-[40px] sm:w-[100px] sm:h-[30px] w-[75px] h-[25px] text-center z-30 bg-cyan-300 right-[30px] bottom-[-20px] shadow-lg flex items-center justify-center md:text-md sm:text-sm text-xs'>{`${currentImageIndex + 1}/${images.length}`}</div>
            </div>

          
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={images[currentImageIndex]}
        title={titles[currentImageIndex]}
        text={texts[currentImageIndex]}
      />
    </div>
  );
}

export default Portfolio;
