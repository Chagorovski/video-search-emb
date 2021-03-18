import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="loader-style">
        <div className="ui active inverted dimmer">
          <div className="ui huge text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div className="ui embed">
        <iframe
          title={video.snippet.title}
          src={videoSrc}
          frameBorder="0"
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
