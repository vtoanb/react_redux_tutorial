// import React from 'react'; replace by ES6 syntax
import React, { Component } from 'react';

// class SearchBar extends React.Component { replace by ES6 syntax
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input
          className="form-control"
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <br/>
      </div>
    );
  }

  // event handler, method with es6
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;