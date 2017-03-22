import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Nav from './nav';

class Components extends Component {
  render() {
    return (
      <div className="docs-main">
        <Nav />
        <main className="docs-page">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Components;
