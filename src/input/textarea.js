import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Input from './input';

class Textarea extends Input {
  static propTypes = {
    rows: PropTypes.string,
    cols: PropTypes.string,
  };

  static defaultProps = {
    rows: '',
    cols: '',
  };

  render() {
    const textClasses = classNames({
      'rmd-textfield': true,
      'rmd-textfield--floating-label': this.props.floatingLabel,
      'is-dirty': this.state.dirty,
      'is-focused': this.state.focus,
    });

    return(
      <div className={textClasses}>
        <textarea
          className="rmd-textfield__input"
          cols={this.props.cols}
          rows={this.props.row}
          onChange={this.handleChangeInput}
          onFocus={this.handleFocusInput}
          onBlur={this.handleBlurInput}
          value={this.state.value}
        />
        <label className="rmd-textfield__label">
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Textarea;
