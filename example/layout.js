import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Nav from './nav';
import Header from './header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="docs-container">
          <Nav />
          <div className="docs-page">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
