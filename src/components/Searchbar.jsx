import { Component } from 'react';
import './styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';

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
      toast.error('Please enter text in the search field!', {
        theme: 'colored',
      });
      return;
    }

    this.props.onSubmit(this.state.inputValue);

    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <ImSearch />
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
