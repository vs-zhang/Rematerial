import React, { Component, PropTypes } from 'react';
import Button from '../button/button';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Button className="rmd-menu-item">{this.props.children}</Button>
      </div>
    );
  }
}

export default MenuItem;
