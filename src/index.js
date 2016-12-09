import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; 

const API_KEY= 'AIzaSyCE7NNcnNtEGWqD-GarjcjckV-_qISBhEk'

// Create a new import React from 'react'
// some Html

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>);
}
// Take this component's generator
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
