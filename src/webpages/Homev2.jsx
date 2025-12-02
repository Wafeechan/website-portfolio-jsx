import FloatingItem from "/src/components/floatingItem.jsx";
import idleImage from "/assets/floatingItem/chibiShiroko.jpg";
import hoverImage from "/assets/floatingItem/shirokoHover.png";
import animFrame1 from "/assets/floatingItem/shirokoPickUp.jpg";
import animFrame2 from "/assets/floatingItem/shirokoPickUp2.jpg";

function Homev2(){
    return(
        <div>
            <FloatingItem
                idleImage={idleImage}
                hoverImage={hoverImage}
                animFrame1={animFrame1}
                animFrame2={animFrame2}
            />
        </div>
    )
}

export default Homev2