import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <aside role="nav" className="docs-nav">
        <li><Link activeClassName="active" to="/components/buttons">Buttons</Link></li>
        <li><Link activeClassName="active" to="/components/cards">Cards</Link></li>
        <li><Link activeClassName="active" to="/components/charts">Charts</Link></li>
        <li><Link activeClassName="active" to="/components/collapsed">Collapsed</Link></li>
        <li><Link activeClassName="active" to="/components/date_picker">Date Picker</Link></li>
        <li><Link activeClassName="active" to="/components/dialogs">Dialogs</Link></li>
        <li><Link activeClassName="active" to="/components/inputs">Form Inputs</Link></li>
        <li><Link activeClassName="active" to="/components/icons">Icons</Link></li>
        <li><Link activeClassName="active" to="/components/menus">Menus</Link></li>
        <li><Link activeClassName="active" to="/components/snackbar">Snackbar</Link></li>
        <li><Link activeClassName="active" to="/components/sticky">Sticky</Link></li>
        <li><Link activeClassName="active" to="/components/tooltip">Tooltip</Link></li>
        <li><Link activeClassName="active" to="/components/video_player">Video Player</Link></li>
      </aside>
    );
  }
}

export default Nav;
