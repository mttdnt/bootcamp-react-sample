import React, { Component } from "react";
import Search from "../Components/Search.js";
import VideoList from "../Components/VideoList.js";
import { SearchYoutube } from "../Services/YoutubeSearch";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      keywords: "",
    };
  }

  onSearchChange = e => {
    this.setState({ keywords: e.target.value });
  };

  onSubmitSearch = async () => {
    const { keywords } = this.state;
    try {
      const response = await SearchYoutube(keywords);
      this.setState({ videoList: response.data.items });
    } catch (e) {
      throw e;
    }
  };
  render() {
    const { keywords, videoList } = this.state;
    return (
      <div>
        <Search
          onSearchChange={this.onSearchChange}
          keywords={keywords}
          onSubmitSearch={this.onSubmitSearch}
        />
        <VideoList videoList={videoList} />
      </div>
    );
  }
}

export default Home;
