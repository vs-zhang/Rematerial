import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Menu, MenuItem } from 'rematerial';

class Nav extends Component {
  render() {
    return (
      <aside role="nav" className="docs-nav">
        <Menu isOpen>
          <MenuItem><Link activeClassName="active" to="/components/buttons">Buttons</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/cards">Cards</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/charts">Charts</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/collapsed">Collapsed</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/date_picker">Date Picker</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/dialogs">Dialogs</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/fab_speed_dial">Fab Speed Dial</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/fab_toolbar">Fab Toolbar</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/inputs">Form Inputs</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/icons">Icons</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/menus">Menus</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/progress">Progress</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/snackbar">Snackbar</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/tooltip">Tooltip</Link></MenuItem>
          <MenuItem><Link activeClassName="active" to="/components/video_player">Video Player</Link></MenuItem>
        </Menu>
      </aside>
    );
  }
}

export default Nav;
