import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/VideoList";

//  const API = "your api here";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API, term: "reactjs" }, data =>
      this.setState({ videos: data })
    );
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
