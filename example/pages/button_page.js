import React, { Component, PropTypes } from 'react';
import { Button, Divider } from '../../';
import { Title, Inline, CodeBlock } from './shared/';
const TitleSource = require('!!raw!./shared/title');

class ButtonPage extends Component {
  render() {
    return (
      <div>
        <Title title="Buttons" desc="Variations on Material Design buttons."/>
        <div>
          <h3>Fab button</h3>
          <Inline>
            <Button type="fab">+</Button>
          </Inline>
          <Inline>
            <Button type="fab" ripple={false}>+</Button>
          </Inline>
        </div>

        <CodeBlock type="">
          {TitleSource}
        </CodeBlock>
        <Divider />

        <div>
          <h3>Flat button</h3>
          <Button type="flat">Button</Button>
          <Button type="flat" ripple={false}>Button</Button>
        </div>

        <Divider />

        <div>
          <h3>Raised button</h3>
          <Button type="raised">Raise Button</Button>
          <Button type="raised" ripple={false}>Raise Button</Button>
        </div>
      </div>
    )
  }
}

export default ButtonPage;
