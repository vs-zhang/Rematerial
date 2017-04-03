import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from './header';

class Layout extends Component {
  render() {
    return (
      <div className="docs-root">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
