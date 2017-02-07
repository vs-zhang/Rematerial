import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Icon extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string.isRequired
  };

  render(){
    const { className, name } = this.props;
    const classes = classNames({
      'rmd-icons': true,
    }, className);

    return (
      <span {...this.props} className={classes}>
        {name}
      </span>
    );
  }
}

export default Icon;
