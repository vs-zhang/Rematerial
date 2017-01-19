import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <aside role="nav" className="docs-nav">
        <li><Link to="/app">App</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/button">Button</Link></li>
        <li><Link to="/dialog">Dialog</Link></li>
        <li><Link to="/card">Card</Link></li>
        <li><Link to="/slider">Slider</Link></li>
        <li><Link to="/toggle">Toggle</Link></li>
        <li><Link to="/snackbar">Snackbar</Link></li>
        <li><Link to="/tooltip">Tooltip</Link></li>
      </aside>
    )
  }
}

export default Nav;
