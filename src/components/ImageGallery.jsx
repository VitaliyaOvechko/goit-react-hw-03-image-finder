// import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Component } from 'react';
import { toast } from 'react-toastify';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 12,
    totalPage: 0,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
      console.log('prevProps.inputValue:', prevProps.inputValue);
      console.log('this.props.inputValue:', this.props.inputValue);
      console.log('Изм текст');

      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?key=33743757-4b01b593e911c90aef060a87e&q=${this.props.inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=${this.state.perPage}`
      )
        .then(response => response.json())
        .then(data => {
          if (data.hits.length === 0) {
            toast.error(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          this.setState(({ images, totalPage, loading }) => ({
            images: [...images, ...data.hits],
            // totalPage: pages,
            loading: true,
          }));
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, page, totalPage, loading } = this.state;
    return (
      <div>
        {loading && <div>Loading...</div>}
        <ul className="imageGallery">
          {images.map(image => (
            <ImageGalleryItem key={image.id} item={image} />
          ))}
        </ul>
      </div>
    );
  }
}
