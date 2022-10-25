import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

class ImageGallery extends Component {
  KEY_API = '29396697-739a936ff485fb734bceeac87';

  state = {
    gallery: [],
    isLoading: false,
    page: 1,
    per_page: 12,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, per_page } = this.state;
    console.log(prevProps.wordSearch);
    console.log(this.props.wordSearch);
    if (
      prevProps.wordSearch !== this.props.wordSearch ||
      prevState.page !== page
    ) {
      this.setState({ isLoading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.wordSearch}&page=${page}&key=${this.KEY_API}&image_type=photo&orientation=horizontal&per_page=${per_page}`
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(
              new Error(`Картинок по запросу ${this.props.wordSearch} нет`)
            );
          })
          .then(gallery => {
            console.log(gallery);
            this.setState(prevState => ({
              gallery: [...prevState.gallery, ...gallery.hits],
            }));
          })
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ isLoading: false }));
      }, 3000);
    }
  }

  handleButtonLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { gallery, isLoading, error } = this.state;

    return (
      <>
        {error && <h3>{error.message}</h3>}
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
        {isLoading && <Loader />}
        {gallery.length !== 0 && <Button onClick={this.handleButtonLoadMore} />}
      </>
    );
  }
}

export { ImageGallery };
