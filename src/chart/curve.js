import React, { Component, PropTypes } from 'react';
import { line, curveMonotoneX } from 'd3-shape';
import _ from 'lodash';
import Group from './group';

class Curve extends Component {
  static propTypes = {
    points: PropTypes.arrayOf(PropTypes.object).isRequired,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
  };

  getPath = (points) => {
    const lineFunction = line().x(p => p.x).y(p => p.y);
    lineFunction.curve(curveMonotoneX);
    return lineFunction(points);
  };

  render() {
    const path = this.getPath(this.props.points);
    const otherProps = _.omit(this.props, ['points', 'isActive']);
    return (
      <Group>
        <path
          {...otherProps}
          strokeWidth={this.props.isActive ? 1.5 : 1}
          fill="none"
          d={path}
        />
      </Group>
    );
  }
}

export default Curve;
