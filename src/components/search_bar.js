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
      <div className="col-md-8">
        <br/>
        <input
          className="form-control"
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
        <br/>
      </div>
    );
  }
  // event handler, method with es6
  onInputChange(event) {
    console.log(event.target.value);
  }
}


export default SearchBar;