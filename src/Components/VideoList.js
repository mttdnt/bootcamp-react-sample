import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const { videoList } = props;
  return videoList.map((video, index) => (
    <VideoListItem
      key={index}
      imageSrc={video.snippet.thumbnails.default.url}
      videoId={video.id.videoId}
      videoTitle={video.snippet.title}
    />
  ));
};

export default VideoList;
