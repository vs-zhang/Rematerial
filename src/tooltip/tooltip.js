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
        this.setState({ style: { bottom: targetRect.height, transformOrigin: 'bottom center', left: 0 } });
        break;
      case 'left':
        this.setState({ style: { right: targetRect.width, transformOrigin: 'right center', top: 0 } });
        break;
      case 'right':
        this.setState({ style: { left: targetRect.width, transformOrigin: 'left center', top: 0 } });
        break;
      case 'bottom':
        this.setState({ style: { top: targetRect.height, transformOrigin: 'top center', left: 0 } });
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
      })
    );

    return (
      <div className="rmd-tooltip-container">
        {childrenWithProps}
        <div
          className={tooltipClass}
          style={this.state.style}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Tooltip;
