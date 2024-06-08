import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';

import Modal from '../Modal';

import 'lightgallery.js/dist/css/lightgallery.css';

import '../../styles/journal.css';

const imagesArray = [
  {
    alt: 'Chemical and Process Engineering School',
    src: 'https://i.ibb.co/kMJ23yG/PRINT-26-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Georges Field Trees',
    src: 'https://i.ibb.co/7NxZp4R/PRINT-20-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
    cls: 'vertical',
  },
  {
    alt: 'Georges Field Columns',
    src: 'https://i.ibb.co/ysx2dcj/PRINT-17-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
    cls: 'vertical',
  },
  {
    alt: 'William Henry Bragg Sculpture',
    src: 'https://i.ibb.co/jML511Y/PRINT-28-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
    cls: 'horizontal',
  },
];

const PhotoItem = ({ image, alt, className }) => (
  <LightgalleryItem src={image}>
    <img
      src={image}
      alt={alt}
      style={{ width: '100%' }}
      className={className}
    />
  </LightgalleryItem>
);

const Mar172024 = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const lightGallerySettings = {
    download: false,
    thumbnail: false,
  };

  return (
    <div className="journal-container">
      <Link to="/index">
        <div className="back-arrow" />
      </Link>
      <div className="top-text">
        <h3>
          a test,
          <br /> a start
        </h3>
        <h4>Pentax PC35AF-M // Ilford HP5+400</h4>
        <p>
          developed and scanned at{' '}
          <a href="https://takeiteasylab.com/" target="_blank" rel="noreferrer">
            Take it Easy
          </a>
        </p>
      </div>

      <button
        style={{ border: 'none', boxShadow: 'none' }}
        type="button"
        onClick={handleOpen}
      >
        words
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <>
          <p>i bought a new (to me) camera, a Pentax PC35AF-M</p>
          <p>
            to test it out i loaded it with some HP5+, and took the camera out
            on a quiet wander through Leeds Uni
          </p>
          <p>
            everything seems ok with the camera; looking forward to taking more
            photos with it
          </p>
        </>
      </Modal>

      <div className="img-container">
        <LightgalleryProvider lightgallerySettings={lightGallerySettings}>
          {imagesArray.map((image) => (
            <PhotoItem
              key={image.alt}
              image={image.src}
              alt={image.alt}
              className={image.cls}
            />
          ))}
        </LightgalleryProvider>
      </div>
    </div>
  );
};

export default Mar172024;
