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
  });

  const handleBackdroapClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return (
    // const { url, alt } = this.props;
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

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('esc');
//       this.props.onClose();
//     }
//   };
//   handleBackdroapClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     const { url, alt } = this.props;
//     return createPortal(
//       <div className="Overlay" onClick={this.handleBackdroapClick}>
//         <div className="Modal">
//           <img src={url} alt={alt} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
