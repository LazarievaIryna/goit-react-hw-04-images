import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ url, alt, onClick, originalUrl }) => {
  function onClickHandlerModal() {
    onClick(originalUrl, alt);
  }
  return (
    <li className="ImageGalleryItem" onClick={onClickHandlerModal}>
      <img src={url} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  originalUrl: PropTypes.string.isRequired,
};
