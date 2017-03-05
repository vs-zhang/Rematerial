import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    floatingLabel: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    hint: '',
    defaultValue: '',
    floatingLabel: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
      dirty: this.props.defaultValue !== '',
      focus: false,
    };

    this.handleChangeInput = ::this.handleChangeInput;
    this.handleFocusInput = ::this.handleFocusInput;
    this.handleBlurInput = ::this.handleBlurInput;
  }

  handleChangeInput(e) {
    const targetValue = e.target.value;
    this.setState({ value: targetValue, dirty: targetValue !== '' });
  }

  handleFocusInput() {
    this.setState({ focus: true });
  }

  handleBlurInput() {
    this.setState({ focus: false });
  }

  render() {
    const textClasses = classNames({
      'rmd-textfield': true,
      'rmd-textfield--floating-label': this.props.floatingLabel,
      'is-dirty': this.state.dirty,
      'is-focused': this.state.focus,
    });
    const id = _.uniqueId('rmd-input');
    return (
      <div className={textClasses}>
        <input
          id={id}
          type="text"
          className="rmd-textfield__input"
          onChange={this.handleChangeInput}
          onFocus={this.handleFocusInput}
          onBlur={this.handleBlurInput}
          value={this.state.value}
        />
        <label className="rmd-textfield__label" htmlFor={id}>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Input;
