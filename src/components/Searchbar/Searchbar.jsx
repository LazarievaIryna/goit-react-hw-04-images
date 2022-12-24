import { Component } from 'react';
import PropTypes from 'prop-types';
export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    console.log(event.currentTarget.value);
    const newQuery = event.currentTarget.value;
    this.setState({ query: newQuery });
  };
  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();

    this.props.onSubmit(query);
    this.reset();
  };
  reset = () => {
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            onChange={this.handleChange}
            value={query}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
