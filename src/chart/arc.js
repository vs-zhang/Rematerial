import React, { Component, PropTypes } from 'react';
import { line, area, arc, pie, curveBasisClosed, curveBasisOpen,
  curveBasis, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY,
  curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';


class Arc extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    stroke: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
  };

  render() {
    const { data, ...otherProps } = this.props;
    return (
      <path
        {...otherProps}
        d={arc()(data)}
      />
    )
  }
}

export default Arc;
