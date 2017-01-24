import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="docs-header">
        <div className="docs-header__nav">
          <Link to="/" className="link">Rematerialize</Link>
          <Link to="/components/" className="link">Components</Link>
          <Link to="https://github.com/vs-zhang/RMD" className="link" target="_blank">Github</Link>
        </div>
      </div>
    )
  }
}

export default Header;
