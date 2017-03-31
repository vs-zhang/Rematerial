import React, { Component, PropTypes } from 'react';
import screenfull from 'screenfull';
import { findDOMNode } from 'react-dom';
import Video from './video';
import Icon from '../icon/icon';
import Slider from '../slider/slider';

class VideoPlayer extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool,
    isLoop: PropTypes.bool,
    volume: PropTypes.number,
  };

  static defaultProps = {
    isPlaying: false,
    isLoop: false,
    volume: 0.25,
  };

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: this.props.isPlaying,
      isLoop: this.props.isLoop,
      isFullscreen: false,
      isShowControls: true,
      isMute: false,
      volume: this.props.volume,
      prevVolume: 0,
      played: 0,
      elapsed: 0,
      seeking: false,
      duration: 100,
      width: '100%',
      height: '100%',
    };

    this.handleClickPlay = ::this.handleClickPlay;
    this.handleChangeVolume = ::this.handleChangeVolume;
    this.onDuration = ::this.onDuration;
    this.onProgress = ::this.onProgress;
    this.handleMouseDownSeek = ::this.handleMouseDownSeek;
    this.handleMouseUpSeek = ::this.handleMouseUpSeek;
    this.onClickFullscreen = ::this.onClickFullscreen;
    this.seekTo = ::this.seekTo;
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.onRequestExitFullscreen);
    document.addEventListener('webkitfullscreenchange', this.onRequestExitFullscreen);
    document.addEventListener('mozfullscreenchange', this.onRequestExitFullscreen);
    document.addEventListener('MSFullscreenChange', this.onRequestExitFullscreen);
  }

  componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.onRequestExitFullscreen);
    document.removeEventListener('webkitfullscreenchange', this.onRequestExitFullscreen);
    document.removeEventListener('mozfullscreenchange', this.onRequestExitFullscreen);
    document.removeEventListener('MSFullscreenChange', this.onRequestExitFullscreen);
  }

  onRequestExitFullscreen = () => {
    const width = screenfull.isFullscreen ? window.screen.width : '100%';
    const height = screenfull.isFullscreen ? window.screen.height : '100%';
    this.setState({ isFullscreen: screenfull.isFullscreen, width, height });
  };

  onMute = () => {
    const { isMute, volume, prevVolume } = this.state;
    if (isMute) {
      this.setState({ volume: prevVolume, isMute: false });
    } else {
      this.setState({ volume: 0, isMute: true, prevVolume: volume });
    }
  };

  onClickFullscreen() {
    if (!this.state.isFullscreen) {
      const node = findDOMNode(this.wrapper);
      screenfull.request(node);
    } else {
      screenfull.exit();
    }
  }

  onDuration(v) {
    this.setState({ duration: v });
  }

  onProgress(state) {
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  handleMouseDownSeek() {
    this.setState({ seeking: true });
  }

  handleMouseUpSeek() {
    this.setState({ seeking: false });
    this.player.seekTo(this.state.played);
  }

  handleClickPlay() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  handleChangeVolume(v) {
    this.setState({ volume: v });
  }

  seekTo(v) {
    this.setState({ played: v });
  }

  secondsToHms = (d) => {
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor(d % 3600 % 60);
    const hours = h > 0 ? `${h}:` : '';
    const seconds = s < 10 ? `0${s}` : s;
    return `${hours}${m}:${seconds}`;
  };

  render() {
    const { isPlaying, isLoop, isFullscreen, volume, played, duration, width, height } = this.state;
    const durationInHms = this.secondsToHms(duration);
    const elapsed = this.secondsToHms(duration * played);
    const videoWrapperStyle = {
      width,
      height,
    };
    const volumeName = (v) => {
      if (v === 0) return 'volume_off';
      return v > 0.5 ? 'volume_up' : 'volume_down';
    };

    return (
      <div className="player-wrapper" ref={(wrapper) => { this.wrapper = wrapper; }}>
        <div className="rmd-video">
          <button
            className="onscreen-actions-wrapper"
            onClick={this.handleClickPlay}
            style={videoWrapperStyle}
            onDoubleClick={this.onClickFullscreen}
          >
            <Video
              ref={(player) => { this.player = player; }}
              url={this.props.url}
              isPlaying={isPlaying}
              volume={volume}
              width={width}
              height={height}
              isLoop={isLoop}
              onDuration={this.onDuration}
              onProgress={this.onProgress}
              onPlay={() => this.setState({ isPlaying: true })}
              onEnded={() => this.setState({ isPlaying: false })}
            />
          </button>
          <div className="rmd-video-controls">
            <div className="video-progress-bar">
              <Slider
                onMouseDown={this.handleMouseDownSeek}
                onMouseUp={this.handleMouseUpSeek}
                onChange={this.seekTo}
                value={played}
                max={1.00}
                min={0.00}
                step={0.01}
                autoHideThumb
              />
            </div>
            <div className="rmd-video-control-buttons">
              <button onClick={this.handleClickPlay} className="play-button">
                <Icon name={isPlaying ? 'pause' : 'play_arrow'} />
              </button>

              <button className="volume-button" onClick={this.onMute}>
                <Icon name={volumeName(volume)} />
              </button>
              <div className="volume-slider">
                <Slider
                  onChange={this.handleChangeVolume}
                  value={volume}
                  max={1.00}
                  min={0.00}
                  step={0.01}
                />
              </div>
              <p className="elapsed-time">{elapsed}/{durationInHms}</p>
              <button onClick={this.onClickFullscreen} className="fullscreen-button">
                <Icon name={isFullscreen ? 'fullscreen_exit' : 'fullscreen'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
