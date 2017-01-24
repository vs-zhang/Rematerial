import React, { Component, PropTypes } from 'react';
import { Button } from '../../';

class ButtonPage extends Component {
  render() {
    return (
      <div>
        <Button type="flat">Button</Button>
        <Button type="fab">+</Button>
        <Button type="raised">Raise Button</Button>
      </div>
    )
  }
}

export default ButtonPage;
