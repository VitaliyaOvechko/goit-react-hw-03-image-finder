import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleFormSubmit = searchText => {
    console.log(searchText);
    this.setState({ searchText });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>;
        <ImageGallery searchText={this.state.searchText}></ImageGallery>;
      </>
    );
  }
}
