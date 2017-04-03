import React, { Component, PropTypes } from 'react';
import Group from './group';

class Rect extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
    base: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { x, y, width, height, base, className, ...otherProps } = this.props;
    const style = {
      transformOrigin: `${x}px ${base.y}px 0px`,
    };

    return (
      <Group style={style} className={className}>
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
