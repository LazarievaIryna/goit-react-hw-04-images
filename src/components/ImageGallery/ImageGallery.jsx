import PropTypes from 'prop-types'; 
import  {ImageGalleryItem}  from "components/ImageGalleryItem/ImageGalleryItem";
export const ImageGallery = ({ images, onClick }) => {

  return (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL, tags }) => 
               (
                <ImageGalleryItem
                  key={id}
                  originalUrl={largeImageURL}
                  url={webformatURL}
                  alt={tags}
                  onClick={onClick}
                />
              )
            )}
  </ul>);
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};