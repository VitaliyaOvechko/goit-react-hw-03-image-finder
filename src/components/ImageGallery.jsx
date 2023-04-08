import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import './styles.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="imageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} item={image} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
