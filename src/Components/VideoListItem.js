import React from "react";
import { Link } from "react-router-dom";
import "./VideoListItem.css";
const VideoListItem = props => {
  const { imageSrc, videoId, videoTitle } = props;
  return (
    <div className="video-list-item">
      <img alt="" src={imageSrc} />
      <p>
        <Link to={`/video/${videoId}`}>{videoTitle}</Link>
      </p>
    </div>
  );
};

export default VideoListItem;
