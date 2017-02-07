import React, { Component, PropTypes } from 'react';
import { Icon } from 'rematerialize';

class IconPage extends Component {
  render() {
    return(
      <div>
        <Icon name="keyboard_arrow_left"/>
        <Icon name="date_range"/>
        <Icon name="accessibility"/>
        <Icon name="3d_rotation"/>
        <Icon name="check_circle"/>
      </div>
    )
  }
}

export default IconPage;
