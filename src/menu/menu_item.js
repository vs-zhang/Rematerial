import React, { Component, PropTypes } from 'react';
import Button from '../button/button';

class MenuItem extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <Button className="rmd-menu-item">{this.props.label}</Button>
      </div>
    );
  }
}

export default MenuItem;
