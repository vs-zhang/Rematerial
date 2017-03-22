import React, { Component, PropTypes } from 'react';

class Paper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="rmd-paper-container">
        {this.props.children}
      </div>
    );
  }
}

export default Paper;
