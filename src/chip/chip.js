import React, { Component, PropTypes } from 'react';

class Chip extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    const { children, ...reactProps } = this.props;
    return (
      <span {...reactProps} className="rmd__chip">
        {children}
      </span>
    );
  }
}

export default Chip;
