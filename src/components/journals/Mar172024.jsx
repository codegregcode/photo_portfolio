import React from 'react';
import { Link } from 'react-router-dom';
import { ImageGallery } from 'react-image-grid-gallery';
import '../../styles/journals/mar-17-2024.css';

const imagesArray = [
  {
    alt: 'Chemical and Process Engineering School',
    caption: 'Chemical and Process Engineering School',
    src: 'https://i.ibb.co/kMJ23yG/PRINT-26-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
  },
  {
    alt: 'Georges Field Trees',
    caption: 'Georges Field Trees',
    src: 'https://i.ibb.co/7NxZp4R/PRINT-20-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
  },
  {
    alt: 'Georges Field Columns',
    caption: 'Georges Field Columns',
    src: 'https://i.ibb.co/ysx2dcj/PRINT-17-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
  },
  {
    alt: 'William Henry Bragg Sculpture',
    caption: 'William Henry Bragg Sculpture',
    src: 'https://i.ibb.co/jML511Y/PRINT-28-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
  },
];

const Mar172024 = () => {
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
        <ImageGallery
          imagesInfoArray={imagesArray}
          columnWidth={230}
          gapSize={24}
        />
      </div>
    </div>
  );
};

export default Mar172024;
