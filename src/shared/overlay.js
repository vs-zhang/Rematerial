import React, { Component, PropTypes } from 'react';

class Overlay extends Component {

  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <div className="overlay">
        {this.props.children}
      </div>
    );
  }
}

export default Overlay;
