import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        </button>
      )}
      {isVisible && (
        <Link to="/index">
          <div className="title-container">
            <h1 className="title-text">echium_photo</h1>
            <img
              src="https://i.ibb.co/rphBVTG/430299530011.jpg"
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
