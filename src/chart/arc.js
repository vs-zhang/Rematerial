import React, { Component, PropTypes } from 'react';
import { arc } from 'd3-shape';

class Arc extends Component {
  static propTypes = {
    data: PropTypes.shape({
      endAngle: PropTypes.number.isRequired,
      innerRadius: PropTypes.number.isRequired,
      outerRadius: PropTypes.number.isRequired,
      padAngle: PropTypes.number.isRequired,
      startAngle: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
    stroke: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
  };

  render() {
    const { data, onMouseEnter, fill, ...otherProps } = this.props;
    return (
      <path
        onMouseEnter={() => { onMouseEnter(data, fill); }}
        fill={fill}
        data={data}
        {...otherProps}
        d={arc()(data)}
      />
    );
  }
}

export default Arc;
