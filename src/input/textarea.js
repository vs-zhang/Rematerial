import React, { PropTypes } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
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
    const id = _.uniqueId('rmd-textarea');
    return (
      <div className={textClasses}>
        <textarea
          className="rmd-textfield__input"
          cols={this.props.cols}
          rows={this.props.row}
          onChange={this.handleChangeInput}
          onFocus={this.handleFocusInput}
          onBlur={this.handleBlurInput}
          value={this.state.value}
          id={id}
        />
        <label className="rmd-textfield__label" htmlFor={id}>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Textarea;
