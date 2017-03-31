import React, { Component, PropTypes } from 'react';

class Video extends Component {
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
    isShowControls: false,
    onReady: () => {},
    onStart: () => {},
    onPlay: () => {},
    onPause: () => {},
    onDuration: () => {},
    onProgress: () => {},
    onEnded: () => {},
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
      this.setState({ isStartOnPlay: true });
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
    const { onReady, onDuration } = this.props;
    this.setState({ isReady: true });
    onReady();
    const duration = this.getDuration();
    if (duration) {
      onDuration(duration);
    }
    if (this.props.isPlaying) {
      this.play();
    }
  };

  onPlay = () => {
    const { isPlaying, volume, onStart, onPlay } = this.props;
    const { isStartOnPlay } = this.state;
    if (isStartOnPlay) {
      this.setVolume(volume);
      onStart();
      this.setState({ isStartOnPlay: false });
    }
    if (isPlaying) {
      onPlay();
    }
  };

  getDuration() {
    return this.state.isReady ? this.player.duration : null;
  }

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
        playsInline
        style={style}
      />
    );
  }
}

export default Video;
