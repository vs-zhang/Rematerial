import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Group from './group';
import { line, area, curveBasisClosed, curveBasisOpen,
  curveBasis, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY,
  curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';

class Curve extends Component {
  static propTypes = {
    points: PropTypes.arrayOf(PropTypes.object),
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
  };

  getPath(points) {
    let lineFunction = line().x(p => p.x).y(p => p.y);
    lineFunction.curve(curveMonotoneX);
    return lineFunction(points);
  }

  render() {
    const path = this.getPath(this.props.points);
    const { points, isActive, ...otherProps } = this.props;
    return(
      <Group>
        <path
          {...otherProps}
          strokeWidth={isActive ? 1.5 : 1}
          fill="none"
          d={path}
        />
      </Group>
    )
  }
}

export default Curve;
