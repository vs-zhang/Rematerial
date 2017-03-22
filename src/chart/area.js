import React, { Component, PropTypes } from 'react';
import { area, curveMonotoneX } from 'd3-shape';
import _ from 'lodash';
import Group from './group';

class Area extends Component {
  static propTypes = {
    points: PropTypes.arrayOf(PropTypes.object).isRequired,
    base: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  };

  getPath = (points) => {
    const areaPoints = points.map(entry => (
      { ...entry, base: this.props.base }
    ));
    const lineFunction = area().x(p => p.x).y1(p => p.y).y0(d => d.base.y);
    lineFunction.curve(curveMonotoneX);
    return lineFunction(areaPoints);
  };

  render() {
    const path = this.getPath(this.props.points);
    const otherProps = _.omit(this.props, ['points', 'base']);
    return (
      <Group>
        <path
          {...otherProps}
          d={path}
        />
      </Group>
    );
  }
}

export default Area;
