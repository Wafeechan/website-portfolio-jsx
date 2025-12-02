import FloatingItem from "/src/components/floatingItem.jsx";
import Shiroko from "/assets/chibiShiroko.jpg";

function Homev2(){
    return(
        <div>

            {/* Floating object */}
            <FloatingItem image={Shiroko} />
        </div>
    )
}

export default Homev2