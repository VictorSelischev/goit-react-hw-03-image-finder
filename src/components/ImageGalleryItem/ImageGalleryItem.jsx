import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags } = this.props;

    return (
      <li className={css.galleryItem}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  }
}

export { ImageGalleryItem };
