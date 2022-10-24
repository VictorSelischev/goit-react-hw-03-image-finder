import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <>
        <button className={css.buttonGallery} type="button">
          Load more
        </button>
      </>
    );
  }
}

export { Button };
