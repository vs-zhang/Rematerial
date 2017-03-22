import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Tooltip extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  };

  static defaultProps = {
    placement: 'bottom',
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      wrapperStyle: {},
      style: {},
    };

    this.handleMouseEnter = ::this.handleMouseEnter;
    this.handleMouseLeave = ::this.handleMouseLeave;
  }

  handleMouseEnter(e) {
    const targetRect = e.target.getBoundingClientRect();
    this.setState({ open: true });
    switch (this.props.placement) {
      case 'top':
        this.setState({ wrapperStyle: { bottom: targetRect.height, left: '50%' }, style: { transformOrigin: 'bottom center', left: '-50%' } });
        break;
      case 'left':
        this.setState({ wrapperStyle: { right: targetRect.width, transformOrigin: 'right center' } });
        break;
      case 'right':
        this.setState({ wrapperStyle: { left: targetRect.width, transformOrigin: 'left center' } });
        break;
      case 'bottom':
        this.setState({ wrapperStyle: { top: targetRect.height, left: '50%' }, style: { transformOrigin: 'top center', left: '-50%' } });
        break;
      default:
        break;
    }
  }

  handleMouseLeave() {
    this.setState({ open: false });
  }

  render() {
    const tooltipClass = classNames({
      'rmd-tooltip': true,
      'rmd-tooltip--active': this.state.open,
    });


    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
      }),
    );

    const { wrapperStyle, style } = this.state;
    return (
      <div className="rmd-tooltip-container">
        {childrenWithProps}
        <div className="rmd-tooltip-wrapper" style={wrapperStyle}>
          <div className={tooltipClass} style={style}>
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default Tooltip;
