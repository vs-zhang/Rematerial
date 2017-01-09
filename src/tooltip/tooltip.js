import React, { Component, PropTypes } from 'react';


class Tooltip extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        Tooltip
      </div>
    );
  }
}

export default Tooltip;
