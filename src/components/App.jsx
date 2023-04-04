import { Component } from 'react';
// import axios from 'axios';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    inputValue: '',
  };

  handleFormSubmit = inputValue => {
    this.setState({ inputValue });

    console.log(inputValue);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />;
        <ImageGallery inputValue={this.state.inputValue} />;
        {/* <ToastContainer autoClose={3000} /> */}
      </>
    );
  }
}
