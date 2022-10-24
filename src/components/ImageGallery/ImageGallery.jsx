import { Component } from 'react';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    return <ul className={css.gallery}>{/* Набор <li> с изображениями */}</ul>;
  }
}

export { ImageGallery };
