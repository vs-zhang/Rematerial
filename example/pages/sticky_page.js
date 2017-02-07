import React, { Component, PropTypes } from 'react';
import { Sticky } from 'rematerialize';

class StickyPage extends Component {
  componentDidMount() {
  }

  render() {
    return(
      <div ref={(container) => {this.container = container;}}>
        <Sticky>
          hello
        </Sticky>
      </div>
    )
  }
}

export default StickyPage;
