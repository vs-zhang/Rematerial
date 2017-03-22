import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from './header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
