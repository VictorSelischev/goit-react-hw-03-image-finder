import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

class App extends Component {
  KEY_API = '29396697-739a936ff485fb734bceeac87';

  state = {
    gallery: null,
    isLoading: false,
    q: '',
  }

  componentDidMount() {
    const { q } = this.state;
    this.setState({ isLoading: true });
    setTimeout(() => {fetch(
      `https://pixabay.com/api/?q=${q}&page=1&key=${this.KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(gallery => this.setState({ gallery })).finally(() => this.setState({isLoading: false}))}, 5000);
  }

  // componentDidUpdate() {
  //   const { q } = this.state;
  //   this.setState({ isLoading: true });
  //   fetch(
  //     `https://pixabay.com/api/?q=${q}&page=1&key=${this.KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(res => res.json())
  //     .then(gallery => this.setState({ gallery })).finally(() => this.setState({ isLoading: false }))
  // }

  updateStateQ = (name) => {
    this.setState({ q: name });
  }

  render() {
    const { gallery, isLoading } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmitProp={this.updateStateQ} />
        {/* {isLoading ? <h2>Loading...</h2> : <ImageGallery gallery={ gallery } />} */}
        {/* {gallery && <div>Тут будет галерея после фетча</div>} */}
      </div>
    );
  }
}

export { App };

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
