import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Sticky extends Component {
  static propTypes = {
    topOffset: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    topOffset: 0,
    className: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      isSticky: false,
      height: 0,
      width: 0,
    };
  }

  componentDidMount() {
    this.update();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps() {
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.update();
  };

  update() {
    const containerRect = this.container.getBoundingClientRect();
    const containerOffsetTop = this.container.offsetTop;
    const yOffset = window.pageYOffset;

    const isSticky = yOffset >= (containerOffsetTop - this.props.topOffset);
    const height = containerRect.height;
    const width = containerRect.width;
    this.setState({ isSticky, height, width });
  }

  render() {
    const { className } = this.props;
    const stickyClasses = classNames({
      'rmd-sticky': true,
      'is-fixed': this.state.isSticky,
    });
    const placeholderStyle = {
      height: this.state.height,
    };
    const style = {
      width: this.state.width,
      top: this.props.topOffset,
    };

    return (
      <div
        className={stickyClasses}
        ref={(container) => { this.container = container; }}
      >
        <span
          className="rmd-sticky__placeholder"
          style={placeholderStyle}
          ref={(placeholder) => { this.placeholder = placeholder; }}
        />
        <div
          ref={(sticky) => { this.sticky = sticky; }}
          style={style}
          className={`rmd-sticky__container ${className}`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Sticky;
