import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/journals/mar-17-2024.css';

const Mar172024 = () => {
  const images = [
    {
      link: 'https://i.ibb.co/cySvq7h/PRINT-26-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400-web-Crop.jpg',
      alt: 'chemical and process engineering school',
    },
    {
      link: 'https://i.ibb.co/g7246Q1/PRINT-20-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400-web-Crop.jpg',
      alt: 'georges field trees',
    },
    {
      link: 'https://i.ibb.co/xYGB23q/PRINT-17-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400-web-Crop.jpg',
      alt: 'georges field columns',
    },
    {
      link: 'https://i.ibb.co/xgFvjV5/PRINT-28-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400-web-Crop.jpg',
      alt: 'william henry bragg sculpture',
    },
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentImgIndex + 1) % images.length;
    setCurrentImgIndex(nextIndex);
  };

  return (
    <div className="mar-17-2024-component">
      <Link to="/index">
        <div className="back-arrow" />
      </Link>
      <div className="mar-17-2024-top-text">
        <h3>a test, a start</h3>
        <h4>Pentax PC35AF-M // Ilford HP5+400</h4>
        <p>
          developed and scanned at{' '}
          <a href="https://takeiteasylab.com/" target="_blank" rel="noreferrer">
            Take it Easy
          </a>
        </p>
      </div>
      <div className="mar-17-2024-text-container">
        <p>i bought a new (to me) camera, a Pentax PC35AF-M</p>
        <p>
          to test it out i loaded it with some HP5+, and took the camera out on
          a quiet wander through Leeds Uni
        </p>
        <p>
          everything seems ok with the camera; looking forward to taking more
          photos with it
        </p>
      </div>
      <div className="mar-17-2024-img-container">
        <div
          className="mar-17-2024-img"
          onClick={handleClick}
          aria-label="next img"
          tabIndex={images.alt}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick();
            }
          }}
          role="button"
        >
          {' '}
          <img
            src={images[currentImgIndex].link}
            alt={images[currentImgIndex].alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Mar172024;
