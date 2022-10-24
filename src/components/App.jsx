import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = {
    wordSearch: '',
  };

  updateStateQ = name => {
    this.setState({ wordSearch: name });
  };

  render() {
    const { wordSearch, isLoading } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <Searchbar onSubmitProp={this.updateStateQ} />
        <ImageGallery wordSearch={ wordSearch } />
        {/* {isLoading ? <h2>Loading...</h2> : <ImageGallery wordSearch={ wordSearch } />} */}
        {/* {gallery && <div>Тут будет галерея после фетча</div>} */}
        <ToastContainer autoClose={3000} theme="colored" />
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
