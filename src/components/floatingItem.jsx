import React, { useEffect, useState, useRef } from "react";

const FloatingItem = ({
  idleImage,
  hoverImage,
  animFrame1,
  animFrame2
}) => {
  const [xPos, setXPos] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isPickedUp, setIsPickedUp] = useState(false);
  const [animFrame, setAnimFrame] = useState(0);

  const animInterval = useRef(null);

  // Movement animation
  useEffect(() => {
    if (isHovered || isPickedUp) return; // stop movement when hovered or picked

    const interval = setInterval(() => {
      setXPos(prev => {
        let next = prev + direction * 2;
        if (next > window.innerWidth - 120) setDirection(-1);
        if (next < 0) setDirection(1);
        return next;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [direction, isHovered, isPickedUp]);

  // Two-frame animation when picked up
  useEffect(() => {
    if (!isPickedUp) {
      clearInterval(animInterval.current);
      return;
    }

    animInterval.current = setInterval(() => {
      setAnimFrame(f => (f === 0 ? 1 : 0));
    }, 200);

    return () => clearInterval(animInterval.current);
  }, [isPickedUp]);

  const handleMouseDown = () => {
    setIsPickedUp(true);
  };

  const handleMouseUp = () => {
    setIsPickedUp(false);
    setAnimFrame(0);

    // Drop it below somewhere
    setXPos(Math.random() * (window.innerWidth - 120));
  };

  let displayImage = idleImage;
  if (isPickedUp) displayImage = animFrame === 0 ? animFrame1 : animFrame2;
  else if (isHovered) displayImage = hoverImage;

  return (
    <img
      src={displayImage}
      alt="floating-item"
      style={{
        position: "fixed",
        bottom: isPickedUp ? "auto" : "100px",
        top: isPickedUp ? "20px" : "auto",
        left: `${xPos}px`,
        width: "100px",
        height: "100px",
        cursor: "pointer",
        userSelect: "none",
        transition: isPickedUp ? "none" : "transform 0.2s ease",
        pointerEvents: "auto"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

export default FloatingItem;
