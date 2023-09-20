import React, { useRef, useEffect, useState } from 'react';
import gif from './valscogif.gif';
import './hover.css';
import {Link}from 'react-scroll';

const HoverImage = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;
      setPosition({ x, y });
      setIsHovered(
        x >= 0 && x <= containerRect.width && y >= 0 && y <= containerRect.height
      );
    };

    containerRef.current?.addEventListener('mousemove', handleMouseMove);

    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const imageStyle = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    left: `${position.x - 195}px`,
    top: `${position.y - 195}px`,
    transition: 'transform .4s ease',
    transform: isHovered ? 'scale(1)' : 'scale(0)',
  };

 

  return (
    <Link to="aboutuspage">
    <div className='softimagecontainer'>
    <div className='softimage'
      ref={containerRef}
    >
    <img
    src={gif}
    alt="HoverImage"
    style={{ ...imageStyle, ...(window.innerWidth <= 768 ? { width: '200px', height: '200px',top:'-10.8px',left:"2px" } : {}) }}
    className={window.innerWidth <= 768 ? 'responsive-image' : ''}
  />
    </div>
    </div>
    </Link>
  );
};

export default HoverImage;
