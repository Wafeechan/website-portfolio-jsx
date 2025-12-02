import React, { useEffect, useState, useRef } from "react";

const FloatingItem = ({
  idleImage,
  hoverImage,
  animFrame1,
  animFrame2
}) => {
  const [xPos, setXPos] = useState(200);
  const [yPos, setYPos] = useState(window.innerHeight - 200);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [animFrame, setAnimFrame] = useState(0);

  const dragOffset = useRef({ x: 0, y: 0 });
  const animInterval = useRef(null);

  // FLOATING MOVEMENT (if not dragging)
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setXPos(prev => {
        let next = prev + direction * 1.5;
        if (next > window.innerWidth - 120) setDirection(-1);
        if (next < 0) setDirection(1);
        return next;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [direction, isHovered, isDragging]);

  // TWO-FRAME ANIMATION WHILE DRAGGING
  useEffect(() => {
    if (!isDragging) {
      clearInterval(animInterval.current);
      return;
    }

    animInterval.current = setInterval(() => {
      setAnimFrame(f => (f === 0 ? 1 : 0));
    }, 200);

    return () => clearInterval(animInterval.current);
  }, [isDragging]);

  // START DRAG
  const handleMouseDown = (e) => {
    setIsDragging(true);

    // Calculate offset so item doesn't "jump"
    dragOffset.current = {
      x: e.clientX - xPos,
      y: e.clientY - yPos
    };
  };

  // DRAGGING: FOLLOW MOUSE
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setXPos(e.clientX - dragOffset.current.x);
    setYPos(e.clientY - dragOffset.current.y);
  };

  // STOP DRAG
  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setAnimFrame(0);
  };

  // Attach global listeners so dragging works smoothly
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  // Decide what image to show
  let displayImage = idleImage;
  if (isDragging) displayImage = animFrame === 0 ? animFrame1 : animFrame2;
  else if (isHovered) displayImage = hoverImage;

  return (
    <img
      src={displayImage}
      alt="floating-item"
      style={{
        position: "fixed",
        left: `${xPos}px`,
        top: `${yPos}px`,
        width: "100px",
        height: "100px",
        cursor: "grab",
        userSelect: "none",
        zIndex: 999,
        pointerEvents: "auto"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      draggable={false} // Important to disable browser default drag
    />
  );
};

export default FloatingItem;
