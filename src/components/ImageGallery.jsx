import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    // const { hits } = this.state.value;
    return (
      <ul className="imageGallery">
        {/* {hits.map(hit => (
          <ImageGalleryItem item={hit} />
        ))} */}
        <li> {this.props.searchText} </li>
      </ul>
    );
  }
}
