import { Component } from 'react';
import css from './Button.module.css';
import { PropTypes } from 'prop-types';


// export const Button = ({onClick}) => {
//   return (
//     <>
//         <button className={css.buttonGallery} type="button" onClick={() => onClick ()}>
//           Load more
//          </button>
//        </>
//   );
// }

class Button extends Component {
  render() {
    return (
      <>
        <button className={css.buttonGallery} type="button" onClick={this.props.onClick}>
          Load more
        </button>
      </>
    );
  }
}

export { Button };

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}