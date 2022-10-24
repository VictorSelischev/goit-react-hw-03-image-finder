import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  KEY_API = '29396697-739a936ff485fb734bceeac87';

  state = {
    gallery: null,
    isLoading: false,
  };

  // componentDidMount(wordSearch) {
  //   // const { wordSearch } = this.prop;
  //   this.setState({ isLoading: true });
  //   setTimeout(() => {
  //     fetch(
  //       `https://pixabay.com/api/?q=${wordSearch}&page=1&key=${this.KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(res => res.json())
  //       .then(gallery => this.setState({ gallery }))
  //       .finally(() => this.setState({ isLoading: false }));
  //   }, 5000);
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.wordSearch !== this.props.wordSearch) {
      this.setState({ isLoading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.wordSearch}&page=1&key=${this.KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(gallery => {console.log(gallery);
          this.setState({ gallery: gallery.hits })})
          .finally(() => this.setState({ isLoading: false }));
      }, 5000);
    }
  }

  render() {
    const { gallery } = this.state;

    return (
      gallery && (
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
      )
    );
  }
}

export { ImageGallery };
