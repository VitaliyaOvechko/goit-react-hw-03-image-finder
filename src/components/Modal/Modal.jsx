import { Component } from 'react';
import { ModalImage, ModalOverlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalImage>{this.props.children}</ModalImage>
      </ModalOverlay>
    );
  }
}
