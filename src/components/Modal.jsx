import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose(e);
    }
  };

  return (
    <div
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      role="button"
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          height: 'fit-content',
          width: 240,
          margin: 'auto',
          padding: '2%',
          border: '2px solid #000',
          borderRadius: '10px',
          boxShadow: '2px solid black',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
