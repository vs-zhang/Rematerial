import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Nav from './nav';

class Components extends Component {
  render() {
    return (
      <div className="docs-container">
        <Nav />
        <div className="docs-page">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Components;
