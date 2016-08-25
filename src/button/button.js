import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export default class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isRippling: false
    };

    this.handleMouseDown = ::this.handleMouseDown;
    this.handleMouseUp = ::this.handleMouseUp;
  }

  static propTypes = {
    type: PropTypes.oneOf(['flat', 'raised', 'fab']),
    ripple: PropTypes.oneOf([true, false])
  };

  static defaultProps = {
    type: 'flat',
    ripple: true
  };

  handleMouseDown(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const elWidth = e.target.offsetWidth;
    const elHeight = e.target.offsetHeight;
    const diagonal = Math.sqrt(elWidth*elWidth + elHeight*elHeight);
    const rippleLength = diagonal*2;
    this.setState({
      top: y - rippleLength/2,
      left: x - rippleLength/2,
      length: rippleLength,
      isRippling: true
    })
  }

  handleMouseUp(e) {
    this.setState({
      isRippling: false
    })
  }

  render() {
    const { children, type, ripple, ...reactProps } = this.props;
    let rippleContainer;
    if(ripple) {
      const style = {
        top: this.state.top,
        left: this.state.left,
        width: this.state.length,
        height: this.state.length,
        display: this.state.isRippling ? 'block' : 'none'
      };
      rippleContainer = <span className="rmd-ripple" style={style}></span>;
    }

    const btnClass = classNames({
      'rmd__button': true,
      'rmd__button--fab': type === 'fab',
      'rmd__button--raised': type === 'raised'
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
    )
  }
}
