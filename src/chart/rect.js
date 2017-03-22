import React, { Component, PropTypes } from 'react';
import Group from './group';

class Rect extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    base: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { x, y, width, height, base, ...otherProps } = this.props;
    const style = {
      transformOrigin: `${x}px ${base.y}px 0px`,
      transform: 'scaleY(1)',
      transition: 'transform 1500ms ease',
    };

    return (
      <Group style={style}>
        <path
          {...otherProps}
          x={x}
          y={y}
          d={`M ${x}, ${y} h ${width} v${height} h ${-width} z`}
        />
      </Group>
    );
  }
}

export default Rect;
