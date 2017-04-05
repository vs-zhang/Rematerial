import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { arc } from 'd3-shape';
import ChartContainer from '../chart/chart_container';
import Group from '../chart/group';


class ProgressCircular extends Component {
  static displayName = 'ProgressCircular';

  static propTypes = {
    type: PropTypes.oneOf(['determinate', 'indeterminate']),
    value: PropTypes.number,
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
  };

  static defaultProps = {
    type: 'indeterminate',
    value: 0.75,
    size: 50,
    strokeWidth: 5,
  };

  render() {
    const { value, size, strokeWidth, type } = this.props;
    const radius = size / 2;
    const data = {
      startAngle: 0,
      endAngle: 2 * Math.PI * value,
      innerRadius: radius - strokeWidth,
      outerRadius: radius,
      value,
    };
    const style = {
      transform: `translate(${radius}px, ${radius}px)`,
    };
    const fillColor = '#106cc8';
    const circularClasses = classNames('rmd-progress-circular', type);
    return (
      <div className={circularClasses}>
        <ChartContainer width={size} height={size}>
          <Group className="rmd-progress-circular-arc" style={style}>
            <path
              fill={fillColor}
              d={arc()(data)}
            />
          </Group>
        </ChartContainer>
      </div>
    );
  }
}

export default ProgressCircular;
