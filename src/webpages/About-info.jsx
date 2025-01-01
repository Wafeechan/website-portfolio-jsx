import React from "react";
import TabImageSlider from "/src/components/tabImageSlider.jsx";
import Image1 from '/src/assets/image/placeholder1.jpg';
import Image2 from '/src/assets/image/placeholder2.jpg';
import Image3 from '/src/assets/image/placeholder3.png';

function AboutInfo() {
    const images = [Image1, Image2, Image3, Image1, Image2, Image3];
    const titles = ['Osaka University', 'Portfolio 2', 'Portfolio 3', 'Portfolio 4', 'Portfolio 5', 'Portfolio 6'];
    const details1 = [
        'Research Assistant',
        '',
        '',
        'Research Assistant',
        '',
        '',
    ]
    const details2 = [
        'Japan',
        '',
        '',
        'Japan',
        '',
        '',
    ]
    const details3 = [
        'May 2023 - July 2023',
        '',
        '',
        'May 2023 - July 2023',
        '',
        '',
    ]
    const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar congue pharetra. Proin quis tortor pellentesque, laoreet risus tempor, fermentum dolor. Fusce nec enim quam. Duis lorem nunc, varius nec consequat nec, ornare non quam. Integer eget metus sit amet mi lobortis facilisis at eu lectus. Ut varius enim non est aliquet auctor. Aenean facilisis risus in laoreet efficitur. Phasellus imperdiet non nisl nec sodales. Nunc eleifend mauris sed nisi congue interdum. Vivamus porttitor eros iaculis velit malesuada, eget consectetur augue rhoncus. Aenean convallis, ante eget pulvinar ornare, nulla nulla egestas nisl, bibendum mattis enim nunc ac ante. Curabitur aliquet auctor leo id accumsan.',

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar congue pharetra. Proin quis tortor pellentesque, laoreet risus tempor, fermentum dolor. Fusce nec enim quam. Duis lorem nunc, varius nec consequat nec, ornare non quam. Integer eget metus sit amet mi lobortis facilisis at eu lectus. Ut varius enim non est aliquet auctor. Aenean facilisis risus in laoreet efficitur. Phasellus imperdiet non nisl nec sodales. Nunc eleifend mauris sed nisi congue interdum. Vivamus porttitor eros iaculis velit malesuada.',

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar congue pharetra. Proin quis tortor pellentesque, laoreet risus tempor, fermentum dolor. Fusce nec enim quam. Duis lorem nunc.',

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar congue pharetra. Proin quis tortor pellentesque, laoreet risus tempor, fermentum dolor. Fusce nec enim quam. Duis lorem nunc, varius nec consequat nec, ornare non quam. Integer eget metus sit amet mi lobortis facilisis at eu lectus. Ut varius enim non est aliquet auctor. Aenean facilisis risus in laoreet efficitur. Phasellus imperdiet non nisl nec sodales. Nunc eleifend mauris sed nisi congue interdum. Vivamus porttitor eros iaculis velit malesuada, eget consectetur augue rhoncus. Aenean convallis, ante eget pulvinar ornare, nulla nulla egestas nisl, bibendum mattis enim nunc ac ante. Curabitur aliquet auctor leo id accumsan.',

    'congue interdum. Vivamus porttitor eros iaculis velit malesuada, eget consectetur augue rhoncus. Aenean convallis, ante eget pulvinar ornare, nulla nulla egestas nisl, bibendum mattis enim nunc ac ante. Curabitur aliquet auctor leo id accumsan.',

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar congue pharetra. Proin quis tortor pellentesque, laoreet risus tempor, fermentum dolor. Fusce nec enim quam. Duis lorem nunc, varius nec consequat nec, ornare non quam. Integer eget metus sit amet mi lobortis facilisis at eu lectus. Ut varius enim non est aliquet auctor. Aenean facilisis risus in laoreet efficitur. Phasellus imperdiet non nisl nec sodales. Nunc eleifend mauris sed nisi congue interdum. Vivamus porttitor eros iaculis velit malesuada, eget consectetur augue rhoncus. Aenean convallis, ante eget pulvinar ornare, nulla nulla egestas nisl, bibendum mattis enim nunc ac ante. Curabitur aliquet auctor leo id accumsan.',
    ];

    return (
        <div className="p-10 bg-blue-400 h-screen sm:h-[120vh] md:h-screen grid grid-rows-[1fr,4fr] gap-10 justify-center">
            <div className="text-white font-Inter text-3xl sm:text-5xl font-semibold flex mt-auto mx-auto">About</div>
            <div className="hidden md:block bg-white rounded-xl w-[1000px] h-[480px]">
                <TabImageSlider images={images} width="200px" height="250px" titles={titles} 
                details1={details1} details2={details2} details3={details3} descriptions={descriptions}/>
            </div>

            {/* Tablet layout */}
            <div className="hidden sm:block md:hidden bg-white rounded-xl w-[600px] h-[700px]">
                <TabImageSlider images={images} width="200px" height="280px" titles={titles} 
                details1={details1} details2={details2} details3={details3} descriptions={descriptions}/>
            </div>

            {/* Phone layout */}
            <div className="block sm:hidden bg-white rounded-xl w-[300px] h-[450px]">
                <TabImageSlider images={images} width="100px" height="150px" titles={titles} 
                details1={details1} details2={details2} details3={details3} descriptions={descriptions}/>
            </div>

        </div>
    );
}

export default AboutInfo;
