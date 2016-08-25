import React from 'react'

import {
  Badge,
  Demo,
  AppBar,
  Divider,
  Chip,
  Button
} from '../';

const exampleStyle = {
  margin: 'auto',
  width: '1200px',
  border: '1px solid black',
  padding: '10px'
};

export const App = () => (
    <div style={exampleStyle}>
        <h1>Examples</h1>
        <h4>Badges</h4>
        <Badge data-badge="5">Badge</Badge>
        <h4>AppBar</h4>
        <AppBar />
        <Divider />
        <Chip>
          Chip
        </Chip>
        <h4>Button</h4>
        <Button type="flat">Button</Button>
        <Button type="flat" ripple={false}>Button false</Button>
        <Button type="fab">
          +
        </Button>
        <Button type="raised">Button raised</Button>
    </div>
);
