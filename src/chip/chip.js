import React, { Component, PropTypes } from 'react'

export default class Chip extends Component {
  render() {
    const { children } = this.props;
    console.log(children);
    return (
      <span className="rmd__chip">
        {children}
      </span>
    )
  }
}
