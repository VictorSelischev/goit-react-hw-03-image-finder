import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.galleryItem}>
        <img src="" alt="" />
      </li>
    );
  }
}

export { ImageGalleryItem };
