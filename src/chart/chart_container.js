import React, { Component, PropTypes } from 'react';

class ChartContainer extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { width, height, children, ...otherProps } = this.props;
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...otherProps}>
        {children}
      </svg>
    );
  }
}

export default ChartContainer;
