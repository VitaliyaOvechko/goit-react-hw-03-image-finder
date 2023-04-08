import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from './Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      item: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <li className="imageGalleryItem">
        <img
          className="imageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={this.handleOpenModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.handleCloseModal}>
            <img src={largeImageURL} alt={tags}></img>
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
