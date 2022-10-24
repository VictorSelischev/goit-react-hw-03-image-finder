import { Component } from 'react';
import css from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChange = evt => {
    // console.log(evt);
    const { value } = evt.target;
    this.setState({ name: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmitProp(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <SearchIcon />
            {/* <span className={css.searchFormButtonLabel}>Search</span> */}
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            name="name"
            value={this.state.name}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };

Searchbar.propTypes = {
  onSubmitProp: PropTypes.func.isRequired
}