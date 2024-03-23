import React from 'react';
import gifBackground from '../assets/animate.gif';
import '../styles/title.css';

const Title = () => {
  return (
    <div className="title-container">
      <h1 className="title-text">echium_photo</h1>
      <img
        src={gifBackground}
        className="title-background"
        alt="Title Background"
      />
    </div>
  );
};

export default Title;
