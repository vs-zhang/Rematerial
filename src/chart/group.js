import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Group extends Component {
  render() {
    const groupClasses = classNames('rmd-chart-group', this.props.className);
    const {...otherProps} = this.props;
    return (
      <g className={groupClasses} {...otherProps}>
        {this.props.children}
      </g>
    )
  }
}

export default Group;
