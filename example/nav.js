import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <aside role="nav" className="docs-nav">
        <li><Link to="/components/app">App</Link></li>
        <li><Link to="/components/button">Button</Link></li>
        <li><Link to="/components/dialog">Dialog</Link></li>
        <li><Link to="/components/card">Card</Link></li>
        <li><Link to="/components/slider">Slider</Link></li>
        <li><Link to="/components/toggle">Toggle</Link></li>
        <li><Link to="/components/snackbar">Snackbar</Link></li>
        <li><Link to="/components/tooltip">Tooltip</Link></li>
        <li><Link to="/components/input">Input</Link></li>
        <li><Link to="/components/date_picker">Date Picker</Link></li>
        <li><Link to="/components/sticky">Sticky</Link></li>
        <li><Link to="/components/icon">Icon</Link></li>
        <li><Link to="/components/chart">Chart</Link></li>
      </aside>
    )
  }
}

export default Nav;
