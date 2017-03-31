import React, { Component, PropTypes } from 'react';

class Paper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { children, className, ...otherProps } = this.props;
    return (
      <div className={`rmd-paper-container ${className}`} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Paper;
