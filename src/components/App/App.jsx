import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { AppContainer } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    perPage: 12,
    totalPage: 0,
    loading: false,
    error: null,
  };

  handleFormSubmit = inputValue => {
    this.setState({ inputValue, images: [], page: 1 });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?key=33743757-4b01b593e911c90aef060a87e&q=${this.state.inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=${this.state.perPage}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              'Sorry, there are no images matching your search query. Please try again.'
            )
          );
        })
        .then(data => {
          if (data.hits.length === 0) {
            toast.warn(
              'Sorry, there are no images matching your search query. Please try again.',
              {
                theme: 'colored',
              }
            );
          }
          const pages = Math.ceil(data.totalHits / this.state.perPage);
          this.setState(({ images, totalPage }) => ({
            images: [...images, ...data.hits],
            totalPage: pages,
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const showButton = this.state.images.length >= 12;
    const { images, page, totalPage, loading, error } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <h1>{error.message}</h1>}
        {loading && <Loader />}
        <ImageGallery inputValue={this.state.inputValue} images={images} />
        {showButton && page < totalPage && (
          <Button onClick={this.handleLoadMore} />
        )}
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
