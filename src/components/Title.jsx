import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gifBackground from '../assets/animate.gif';
import '../styles/title.css';

const Title = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showEnterText, setShowEnterText] = useState(true);

  const handleEnterClick = () => {
    setShowEnterText(false);
    setIsVisible(true);
  };

  return (
    <div className="title-component">
      {showEnterText && (
        <button
          type="button"
          onClick={handleEnterClick}
          data-testid="title-button"
        >
          enter
          <br />
          (warning flashing images)
        </button>
      )}
      {isVisible && (
        <Link to="/index">
          <div className="title-container">
            <h1 className="title-text">echium_photo</h1>
            <img
              src={gifBackground}
              className="title-background"
              title="click me"
              alt="Title Background"
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Title;
