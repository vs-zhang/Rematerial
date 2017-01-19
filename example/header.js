import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="docs-header">
        Nav
        <Link to="https://github.com/vs-zhang/RMD" target="_blank" >Github</Link>
      </div>
    )
  }
}

export default Header;
