import React, { useEffect, useState } from "react";
//import Shiroko from '/assets/chibi_Shiroko_OK.jpg';

const FloatingItem = ({ image }) => {
  const [xPos, setXPos] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    const interval = setInterval(() => {
      setXPos(prev => {
        let next = prev + direction * 2; // move speed

        // If near left or right boundary, reverse direction
        if (next > window.innerWidth - 120) { // minus width of image
          setDirection(-1);
        } else if (next < 0) {
          setDirection(1);
        }

        return next;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <img
      src={image}
      alt="floating-item"
      style={{
        position: "fixed",
        bottom: "100px",
        left: `${xPos}px`,
        width: "100px",
        height: "100px",
        pointerEvents: "auto",
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
      onClick={() => console.log("Clicked! (This will be the pick-up later)")}
    />
  );
};

export default FloatingItem;
