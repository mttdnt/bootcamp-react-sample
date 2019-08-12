import React from 'react';

const VideoList = (props) => {
    const { videoList } = props;

    return videoList.map(video => (
        <div
        >
            <img alt='' src={video.snippet.thumbnails.default.url} />
            <p>{ video.snippet.title }</p>
        </div>
    ));
};

export default VideoList;