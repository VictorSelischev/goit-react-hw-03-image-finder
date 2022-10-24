import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return <ul className={css.gallery}>
      <ImageGalleryItem />
      {/* Набор <li> с изображениями */}</ul>;
  }
}

export { ImageGallery };
