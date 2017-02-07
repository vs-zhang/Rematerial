import React, { Component, PropTypes } from 'react';

class HomePage extends Component {
  componentDidMount() {
    console.log('hi');
  }

  render() {
    return (
      <div className="docs-home">
        Rematerialize

        <li>
          <code>isOpen</code>
        </li>
      </div>
    )
  }
}

export default HomePage;
