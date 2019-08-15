import React, { Component } from "react";
import { getVideoById } from "../Services/YoutubeSearch";
import { Link } from "react-router-dom";

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      videoUrl: "",
      description: "",
    };
  }

  componentDidMount() {
    const videoId = this.props.match.params.videoId;
    this.getVideoDetails(videoId);
  }

  getVideoDetails = async videoId => {
    try {
      const response = await getVideoById(videoId);
      if (response.data.items.length > 0) {
        this.setState({
          title: response.data.items[0].snippet.title,
          description: response.data.items[0].snippet.description,
          videoUrl: `https://www.youtube.com/embed/${
            response.data.items[0].id
          }`,
        });
      }
    } catch (e) {
      throw e;
    }
  };
  render() {
    return (
      <div>
        <Link to="/">Go back to search page</Link>

        <h2>Title</h2>
        <p>{this.state.title}</p>

        <iframe
          width="620"
          height="515"
          title={this.state.title}
          src={this.state.videoUrl}
        />

        <h2>Description:</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
