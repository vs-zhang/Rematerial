import React, { Component, PropTypes } from 'react';

class ChartContainer extends Component {
  render() {
    const { width, height, children, ...otherProps } = this.props;
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...otherProps}>
        {children}
      </svg>
    )
  }
}

export default ChartContainer;
