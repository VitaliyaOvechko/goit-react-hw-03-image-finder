// import PropTypes from 'prop-types';
import { Component } from 'react';
import './styles.css';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.inputValue.trim() === '') {
      alert('Введіть текст в поле пошуку!');
      // toast.error(
      //   'Введіть текст в поле пошуку!'
      // );
      return;
    }

    this.props.onSubmit(this.state.inputValue);

    console.log(this.state);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>
          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
}
