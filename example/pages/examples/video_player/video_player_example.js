import React, { Component, PropTypes } from 'react';
import { Icon, Slider } from 'rematerial';
import screenfull from 'screenfull';
import { findDOMNode } from 'react-dom';

const SEEK_EXPIRY_TIME = 5000;
let n = 0;

class VideoPlayer extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool,
    isLoop: PropTypes.bool,
    isShowControls: PropTypes.bool,
    progressFrequency: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    volume: PropTypes.number,
    onReady: PropTypes.func,
    onStart: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onDuration: PropTypes.func,
    onProgress: PropTypes.func,
    onEnded: PropTypes.func,
  };

  static defaultProps = {
    isPlaying: false,
    isLoop: false,
    progressFrequency: 1000,
    volume: 0.5,
    width: '100%',
    height: '100%',
    isShowControls: true,
    onReady: () => {
    },
    onStart: () => {
    },
    onPlay: () => {
    },
    onPause: () => {
    },
    onDuration: () => {
    },
    onProgress: () => {
    },
    onEnded: () => {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isStartOnPlay: true,
    };
    this.progress = ::this.progress;
  }

  componentDidMount() {
    this.progress();
    const { url, onPause, onEnded } = this.props;
    this.load(url);
    this.player.addEventListener('canplay', this.onReady);
    this.player.addEventListener('play', this.onPlay);
    this.player.addEventListener('pause', () => {
      onPause();
    });
    this.player.addEventListener('ended', onEnded);
  }

  componentWillReceiveProps(nextProps) {
    const { url, volume, isPlaying } = this.props;
    if (url !== nextProps.url && nextProps.url) {
      this.setState({isStartOnPlay: true});
      this.load(nextProps.url);
    } else if (url && !nextProps.url) {
      this.stop();
    } else if (volume !== nextProps.volume) {
      this.setVolume(nextProps.volume);
    } else if (!isPlaying && nextProps.isPlaying) {
      this.play();
    } else if (isPlaying && !nextProps.isPlaying) {
      this.pause();
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.url !== nextProps.url;
  }

  componentWillUnmount() {
    clearTimeout(this.progressTimeout);
    this.stop();
  }

  onReady = () => {
    const { onReady, onDuration, isPlaying } = this.props;
    this.setState({isReady: true});
    onReady();
    if (isPlaying || this.preloading) {
      console.log('hi');
    }
    const duration = this.getDuration();
    if (duration) {
      onDuration(duration);
    }
  };

  getDuration() {
    return this.state.isReady ? this.player.duration : null;
  }

  onPlay = () => {
    const { isPlaying, volume, onStart, onPlay } = this.props;
    const { isStartOnPlay } = this.state;
    if (isStartOnPlay) {
      this.setVolume(volume);
      onStart();
      this.setState({isStartOnPlay: false});
    }
    onPlay();
  };

  setVolume(value) {
    this.player.volume = value;
  }

  getFractionPlayed() {
    if (!this.state.isReady) return null;
    return this.player.currentTime / this.getDuration();
  }

  getFractionLoaded() {
    if (!this.state.isReady) return null;
    return this.player.buffered.end(0) / this.getDuration();
  }

  progress() {
    console.log(n);
    n += 1;
    if (this.props.url && this.player) {
      const loaded = this.getFractionLoaded() || 0;
      const played = this.getFractionPlayed() || 0;
      const progress = {};
      if (loaded !== this.prevLoaded) {
        progress.loaded = loaded;
      }
      if (played !== this.prevPlayed) {
        progress.played = played;
      }
      if (progress.loaded || progress.played) {
        this.props.onProgress(progress);
      }
      this.prevLoaded = loaded;
      this.prevPlayed = played;
    }
    this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency);
  }

  seekTo(v) {
    this.player.currentTime = this.getDuration() * v;
  }

  load(url) {
    this.player.src = url;
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  stop() {
    this.player.removeAttribute('src');
  }

  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
    };
    const { isLoop, isShowControls } = this.props;
    return (
      <video
        ref={(player) => { this.player = player; }}
        controls={isShowControls}
        loop={isLoop}
        preload="auto"
        autoPlay="autoplay"
        playsInline
        style={style}
      />
    );
  }
}

class VideoPlayerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      volume: 0.1,
      played: 0,
      elapsed: 0,
      seeking: false,
      duration: 100,
      width: '100%',
      height: '100%',
    };

    this.handleClick = ::this.handleClick;
    this.handleChangeVolume = ::this.handleChangeVolume;
    this.onDuration = ::this.onDuration;
    this.onProgress = ::this.onProgress;
    this.handleMouseDownSeek = ::this.handleMouseDownSeek;
    this.handleMouseUpSeek = ::this.handleMouseUpSeek;
    this.onClickFullscreen = ::this.onClickFullscreen;
    this.seekTo = ::this.seekTo;
  }

  seekTo(v) {
    this.setState({played: v});
  }

  handleMouseDownSeek() {
    this.setState({seeking: true});
  }

  handleMouseUpSeek() {
    this.setState({seeking: false});
    this.player.seekTo(this.state.played);
  }

  handleClick() {
    this.setState({isPlaying: !this.state.isPlaying});
  }

  handleChangeVolume(v) {
    this.setState({volume: v});
  }

  onDuration(v) {
    this.setState({duration: v});
  }

  onProgress(state) {
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  onClickFullscreen() {
    this.setState({width: window.screen.width, height: window.screen.height});
    const node = findDOMNode(this.wrapper);
    screenfull.request(node);
  }

  secondsToHms(d) {
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s);
  }

  render() {
    const { isPlaying, volume, played, duration, width, height } = this.state;
    const durationInHms = this.secondsToHms(duration);
    const elapsed = this.secondsToHms(duration * played);
    const volumeName = (v) => {
      if (v === 0) return 'volume_off';
      return v > 0.5 ? 'volume_up' : 'volume_down';
    };

    const exp = {
      JavaScript: 3,
      HTML: 3,
      CSS: 3,
      SQL: 3,
      grunt: 2,
      Sass: 2,
      LESS: 2,
      PostgreSQL: 2,
      MongoDB: 3,
      Rails: 3,
      AngularJS: 2,
      React: 1,
      jQuery: 3,
      AWS: 2,
      Heroku: 2,
      git: 3,
    };

    return (
      <div className="player-wrapper" ref={(wrapper) => { this.wrapper = wrapper; }}>
        <div className="rmd-video">
          <VideoPlayer
            ref={(player) => { this.player = player; }}
            url="http://easyhtml5video.com/images/happyfit2.mp4"
            isPlaying={isPlaying}
            volume={volume}
            width={width}
            height={height}
            isShowControls={false}
            onDuration={this.onDuration}
            onProgress={this.onProgress}
            onPlay={() => this.setState({ isPlaying: true })}
            onEnded={() => this.setState({ isPlaying: false })}
          />
          <div className="rmd-video-controls">
            <div className="video-progress-bar">
              <Slider
                onMouseDown={this.handleMouseDownSeek}
                onMouseUp={this.handleMouseUpSeek}
                onChange={this.seekTo}
                value={played}
                max={1.00}
                min={0.00}
                step="any"
              />
            </div>
            <div className="rmd-video-control-buttons">
              <button onClick={this.handleClick} className="play-button">
                <Icon name={isPlaying ? 'pause' : 'play_arrow'}/>
              </button>

              <button className="volume-button">
                <Icon name={volumeName(volume)}/>
              </button>
              <Slider
                className="volume-slider"
                onChange={this.handleChangeVolume}
                value={volume}
                max={1.00}
                min={0.00}
                step={0.01}
              />
              <p className="elapsed-time">{elapsed}/{durationInHms}</p>
              <button onClick={this.onClickFullscreen} className="fullscreen-button">
                <Icon name="fullscreen"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayerExample;