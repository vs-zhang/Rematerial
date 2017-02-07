import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Group from './group';
import { line, area, curveBasisClosed, curveBasisOpen,
  curveBasis, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY,
  curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';


class Area extends Component {
  static propTypes = {
    points: PropTypes.arrayOf(PropTypes.object),
    base: PropTypes.object,
  };

  getPath(points) {
    const areaPoints = points.map((entry, index) => (
    {...entry, base: this.props.base}
    ));

    let lineFunction = area().x(p => p.x).y1(p => p.y).y0(d => d.base.y);
    lineFunction.curve(curveMonotoneX);
    return lineFunction(areaPoints);
  }

  render() {
    const path = this.getPath(this.props.points);
    const { points, base, ...otherProps } = this.props;
    return(
      <Group>
        <path
          {...otherProps}
          d={path}
        />
      </Group>
    )
  }
}

export default Area;
