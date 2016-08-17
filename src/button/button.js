import React, { Component, PropTypes } from 'react'

export default class Button extends Component {
  render() {
    const { children, ...reactProps } = this.props;
    return (
      <button
        {...reactProps}
        className="rmd__button"
      >
        {children}
      </button>
    )
  }
}
