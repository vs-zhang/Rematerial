import React, { Component, PropTypes } from 'react';
import { VideoPlayer } from 'rematerial';

class VideoPlayerExample extends Component {
  render() {
    return (
      <VideoPlayer
        url="http://easyhtml5video.com/images/happyfit2.mp4"
        volume={0.25}
      />
    );
  }
}

export default VideoPlayerExample;

