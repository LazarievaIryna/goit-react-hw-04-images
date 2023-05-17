import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, url, alt }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('esc');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[onClose]);

  const handleBackdroapClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return (
   
    createPortal(
      <div className="Overlay" onClick={handleBackdroapClick}>
        <div className="Modal">
          <img src={url} alt={alt} />
        </div>
      </div>,
      modalRoot
    )
  );
};
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

