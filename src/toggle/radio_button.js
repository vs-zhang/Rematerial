import React, { Component, PropTypes } from 'react';

class RadioButton extends Component {
  static propTypes = {
    value: PropTypes.bool,
  };

  render() {
    return (
      <div>
        Radio Button
      </div>
    );
  }
}

export default RadioButton;
