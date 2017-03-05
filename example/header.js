import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import LogoImg from './asset/rematerial.svg';

class Header extends Component {
  render() {
    return (
      <div className="docs-header">
        <div className="docs-header__nav">
          <Link to="/" className="link">
            <img src={LogoImg} className="docs-header__logo"/>
            Rematerial
          </Link>
          <Link to="https://github.com/vs-zhang/RMD" className="link float-right" target="_blank">Github</Link>
          <Link to="/components/" className="link float-right">Components</Link>
        </div>
      </div>
    )
  }
}

export default Header;
