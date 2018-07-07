import _ from "lodash";
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

//  const API = "your api here";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("reactjs");
  }
  videoSearch(term) {
    YTSearch({ key: API, term: term }, data =>
      this.setState({ videos: data, selectedVideo: data[0] })
    );
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

export default App;
