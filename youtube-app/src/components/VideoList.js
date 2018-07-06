import React from "react";
import VideoListItems from "./VideoListItems";

const VideoList = props => {
  const videoItems = props.videos.map(video => (
    <VideoListItems video={video} key={video.etag} />
  ));

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
