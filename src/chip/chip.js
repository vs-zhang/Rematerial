import React, { Component, PropTypes } from 'react';

class Chip extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...reactProps } = this.props;
    return (
      <span {...reactProps} className="rmd-chip">
        {children}
      </span>
    );
  }
}

export default Chip;
