import React, { Component, PropTypes } from 'react';

class Toggle extends Component {
  static propTypes = {
    value: PropTypes.bool,
  };

  render() {
    return (
      <div>
        toggle
      </div>
    );
  }
}

export default Toggle;
