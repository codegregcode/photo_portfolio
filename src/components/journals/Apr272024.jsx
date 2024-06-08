import React from 'react';
import { Link } from 'react-router-dom';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';

import 'lightgallery.js/dist/css/lightgallery.css';

import '../../styles/journal.css';

const imagesArray = [
  {
    alt: 'Porto Cathedral',
    src: 'https://i.ibb.co/CsXTJqK/print2.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Porto Cathedral 2',
    src: 'https://i.ibb.co/BZRBpYv/print1.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Fish',
    src: 'https://i.ibb.co/4f5870Y/print3.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Looking towards Vila Nove de Gaia',
    src: 'https://i.ibb.co/Bn01DRq/249831670009.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Ponte Luís I',
    src: 'https://i.ibb.co/xqF7PJg/249831670013.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Capela das Almas',
    src: 'https://i.ibb.co/6Nxy5jd/249831670021.jpg',
    cls: 'vertical',
  },
  {
    alt: 'Capela das Almas (close up)',
    src: 'https://i.ibb.co/kDn38hD/249831670020.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Ribeira Square',
    src: 'https://i.ibb.co/8bKsfJy/print5.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'São Bento',
    src: 'https://i.ibb.co/HnW16Vv/print4.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Rio Douro from the train',
    src: 'https://i.ibb.co/FKfctbg/249831670002.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Praise the tiler [slight crop]',
    src: 'https://i.ibb.co/D4jBtKX/249831660013.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Peacock (front)',
    src: 'https://i.ibb.co/4jxZgG7/249831660014.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Peacock (back)',
    src: 'https://i.ibb.co/8gRP0NH/249831660015.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Chickens having a drink - Jardins do Palácio de Cristal',
    src: 'https://i.ibb.co/tXFGntm/249831660018.jpg',
    cls: 'vertical',
  },
  {
    alt: 'Palms - Jardins do Palácio de Cristal',
    src: 'https://i.ibb.co/NrgXF97/249831660019.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'By the lake - Jardim da Cordoaria',
    src: 'https://i.ibb.co/3zG9XVx/249831660029.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'From the otherside (of the lake) - Jardim da Cordoaria',
    src: 'https://i.ibb.co/bsM6Q4t/249831660023.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Shady avenue - Jardim da Cordoaria',
    src: 'https://i.ibb.co/ZGZjq8c/249831660027.jpg',
    cls: 'vertical',
  },
  {
    alt: 'Thank you for the shade 🙏',
    src: 'https://i.ibb.co/s141KMg/249831660031.jpg',
    cls: 'horizontal',
  },
  {
    alt: 'Street tiling',
    src: 'https://i.ibb.co/0t5nDV4/249831660034.jpg',
    cls: 'vertical',
  },
  {
    alt: 'Xross - Pinhão',
    src: 'https://i.ibb.co/JKDRwth/430299520015.jpg',
    cls: 'vertical',
  },
  {
    alt: 'Structures',
    src: 'https://i.ibb.co/PmxsG3b/430299520007.jpg',
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

const Apr272024 = () => {
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
        <h3>Porto</h3>
        <h4>Pentax PC35AF-M // Kodak Gold 200 // Fuji 200 // Metropolis</h4>
        <p>
          developed and scanned at{' '}
          <a href="https://takeiteasylab.com/" target="_blank" rel="noreferrer">
            Take it Easy
          </a>
        </p>
      </div>
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

export default Apr272024;
