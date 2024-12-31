import React from "react";
import TabImageSlider from "/src/components/tabImageSlider.jsx";
import Image1 from '/src/assets/image/placeholder1.jpg';
import Image2 from '/src/assets/image/placeholder2.jpg';
import Image3 from '/src/assets/image/placeholder3.png';

function AboutInfo() {
    const images = [Image1, Image2, Image3];
    const titles = ['Portfolio 1', 'Portfolio 2', 'Portfolio 3'];
    const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar congue pharetra. Proin quis tortor pellentesque, laoreet risus tempor, fermentum dolor. Fusce nec enim quam. Duis lorem nunc, varius nec consequat nec, ornare non quam. Integer eget metus sit amet mi lobortis facilisis at eu lectus. Ut varius enim non est aliquet auctor. Aenean facilisis risus in laoreet efficitur. Phasellus imperdiet non nisl nec sodales. Nunc eleifend mauris sed nisi congue interdum. Vivamus porttitor eros iaculis velit malesuada, eget consectetur augue rhoncus. Aenean convallis, ante eget pulvinar ornare, nulla nulla egestas nisl, bibendum mattis enim nunc ac ante. Curabitur aliquet auctor leo id accumsan.',

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar congue pharetra. Proin quis tortor pellentesque, laoreet risus tempor, fermentum dolor. Fusce nec enim quam. Duis lorem nunc, varius nec consequat nec, ornare non quam. Integer eget metus sit amet mi lobortis facilisis at eu lectus. Ut varius enim non est aliquet auctor. Aenean facilisis risus in laoreet efficitur. Phasellus imperdiet non nisl nec sodales. Nunc eleifend mauris sed nisi congue interdum. Vivamus porttitor eros iaculis velit malesuada, eget consectetur augue rhoncus. Aenean convallis, ante eget pulvinar ornare, nulla nulla egestas nisl, bibendum mattis enim nunc ac ante. Curabitur aliquet auctor leo id accumsan.',

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar congue pharetra. Proin quis tortor pellentesque, laoreet risus tempor, fermentum dolor. Fusce nec enim quam. Duis lorem nunc, varius nec consequat nec, ornare non quam. Integer eget metus sit amet mi lobortis facilisis at eu lectus. Ut varius enim non est aliquet auctor. Aenean facilisis risus in laoreet efficitur. Phasellus imperdiet non nisl nec sodales. Nunc eleifend mauris sed nisi congue interdum. Vivamus porttitor eros iaculis velit malesuada, eget consectetur augue rhoncus. Aenean convallis, ante eget pulvinar ornare, nulla nulla egestas nisl, bibendum mattis enim nunc ac ante. Curabitur aliquet auctor leo id accumsan.',
    ];

    return (
        <div className="p-10 bg-blue-400 h-screen flex items-center justify-center">
            <div className="bg-white w-[1000px]">
                <TabImageSlider images={images} width="200px" height="250px" titles={titles} descriptions={descriptions}/>
            </div>

        </div>
    );
}

export default AboutInfo;
