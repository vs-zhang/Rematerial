import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Button extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['flat', 'raised', 'fab']),
    ripple: PropTypes.oneOf([true, false]),
  };

  static defaultProps = {
    type: 'flat',
    ripple: true,
  };

  constructor(props, content) {
    super(props, content);

    this.state = {
      isRippling: false,
    };

    this.handleMouseDown = ::this.handleMouseDown;
    this.handleMouseUp = ::this.handleMouseUp;
  }

  handleMouseDown(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const elWidth = e.target.offsetWidth;
    const elHeight = e.target.offsetHeight;
    const diagonal = Math.sqrt((elWidth ** 2) + (elHeight ** 2));
    const rippleLength = diagonal * 2;
    this.setState({
      top: y - (rippleLength / 2),
      left: x - (rippleLength / 2),
      length: rippleLength,
      isRippling: true,
    });
  }

  handleMouseUp() {
    this.setState({
      isRippling: false,
    });
  }

  render() {
    const { children, type, ripple, ...reactProps } = this.props;
    let rippleContainer;
    if (ripple) {
      const style = {
        top: this.state.top,
        left: this.state.left,
        width: this.state.length,
        height: this.state.length,
        display: this.state.isRippling ? 'block' : 'none',
      };
      rippleContainer = <span className="rmd-ripple" style={style} />;
    }

    const btnClass = classNames({
      'rmd-button': true,
      'rmd-button--fab': type === 'fab',
      'rmd-button--raised': type === 'raised',
    });


    return (
      <button
        {...reactProps}
        className={btnClass}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        { children }
        { rippleContainer}
      </button>
    );
  }
}

export default Button;
