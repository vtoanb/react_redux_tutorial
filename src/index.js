import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY= 'AIzaSyCE7NNcnNtEGWqD-GarjcjckV-_qISBhEk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: 0,
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch (term) {
    const oldRequest = this.state.request;
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        request: oldRequest + 1,
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    const videoSearch = _.debounce( term => this.videoSearch(term), 2000);
    return (
      <div className="container">
        <br/>
        <h1>you request {this.state.request} times</h1>
        <div className="col-md-8">
          <SearchBar onSearchTermChange={ term => videoSearch(term) }/>
          <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <VideoList
          className="col-md-4"
          onVideoSelect={ (selectedVideo) => { this.setState({selectedVideo}) } }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
