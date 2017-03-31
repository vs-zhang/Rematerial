import React from 'react';
import DocumentTitle from 'react-document-title';
import { Title, CodeBlock } from './shared/';
import VideoPlayerExample from './examples/video_player/video_player_example';
const VideoPlayerExampleSource = require('!!raw!./examples/video_player/video_player_example');

const VideoPlayerPage = () => {
  const style = {
    width: 550,
  };
  return (
    <DocumentTitle title="Video Player">
      <div>
        <Title title="Video Player" desc="A customize html5 video player." />
        <section>
          <h3 className="example-title">1. Video Player</h3>
          <div style={style}>
            <VideoPlayerExample />
          </div>
          <CodeBlock type="javascript">
            {VideoPlayerExampleSource}
          </CodeBlock>
        </section>
      </div>
    </DocumentTitle>
  );
};

export default VideoPlayerPage;
