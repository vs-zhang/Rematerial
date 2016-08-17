import React, { Component, PropTypes } from 'react'

export default class Chip extends Component {
  render() {
    const { children, ...reactProps } = this.props;
    return (
      <span {...reactProps} className="rmd__chip">
        {children}
      </span>
    )
  }
}
