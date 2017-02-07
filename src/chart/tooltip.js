import React, { Component, PropTypes } from 'react';

class Tooltip extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.string,
    isActive: PropTypes.bool,
    position: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
    }),
  };

  static defaultProps = {
    isActive: false,
    color: '#C6C6C6',
    position: {top: 0, left: 0},
  };

  constructor(props) {
    super(props);
    this.state = {
      open: this.props.isActive,
    };
  }

  render() {
    const { isActive, position, title, value, color } = this.props;

    const style = {
      position: 'absolute',
      top: position.top,
      left: position.left,
      padding: 5,
      background: 'white',
      opacity: 0.8,
      border: `1px solid ${color}`,
      borderRadius: 5,
      color,
    };

    return (
      <div>
        {isActive &&
        <div style={style}>
          <div>{value}</div>
        </div>
        }
      </div>
    )
  }
}

export default Tooltip;
