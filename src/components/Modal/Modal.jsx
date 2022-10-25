import { Component } from 'react';
import css from './Modal.module.css';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

    handleBackdropClick = evt => {
        // console.log(evt.currentTarget);
        // console.log(evt.target);
    if (evt.currentTarget !== evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return createPortal(
      <div className={css.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={css.modalWindow}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export { Modal };

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
