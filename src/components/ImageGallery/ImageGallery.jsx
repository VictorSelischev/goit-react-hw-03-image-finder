import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

class ImageGallery extends Component {
  KEY_API = '29396697-739a936ff485fb734bceeac87';

  state = {
    gallery: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.wordSearch !== this.props.wordSearch) {
      this.setState({ isLoading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.wordSearch}&page=1&key=${this.KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(gallery => {
            console.log(gallery);
            this.setState({ gallery: gallery.hits });
          })
          .finally(() => this.setState({ isLoading: false }));
      }, 5000);
    }
  }

  render() {
    const { gallery, isLoading } = this.state;

    return (
      <>
        {isLoading && <Loader />}
        {gallery && (
          <ul className={css.gallery}>
            {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  id={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                />
              );
            })}
          </ul>
        )}
        {gallery && <Button />}
      </>
    );
  }
}

export { ImageGallery };
