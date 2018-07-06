import React from "react";

const VideoListItems = props => {
  const imageUrl = props.video.snippet.thumbnails.default.url;
  const title = props.video.snippet.title;
  return (
    <li className="list-group-item">
      <div className="video-list media ">
        <div className="media-left">
          <img className="media-object" alt="media" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading"> {title} </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItems;
