import React from 'react'
import '../app.css'

import {
  Badge,
  Demo,
  AppBar
} from '../';

const exampleStyle = {
  margin: 'auto',
  width: '1200',
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

        <h4>Demo</h4>
        <Demo />
    </div>
);
