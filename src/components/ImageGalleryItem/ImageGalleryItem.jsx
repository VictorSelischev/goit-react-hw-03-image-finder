import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { PropTypes } from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <li className={css.galleryItem}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  }
}

export { ImageGalleryItem };

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
}