import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

class Checkbox extends Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onCheck: PropTypes.func,
  };

  static defaultProps = {
    isChecked: false,
    onCheck: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked,
    };

    this.handleCheck = ::this.handleCheck;
  }

  handleCheck() {
    const value = !this.state.isChecked;
    this.setState({ isChecked: value });
    if (this.props.onCheck) {
      this.props.onCheck(value);
    }
  }

  render() {
    const checkboxClass = classNames({
      'rmd-checkbox': true,
      'is-checked': this.state.isChecked,
    });
    const id = _.uniqueId('rmd-check');
    return (
      <label className={checkboxClass} htmlFor={id}>
        <input
          type="checkbox"
          className="rmd-checkbox__input"
          checked={this.state.isChecked}
          value={this.state.isChecked}
          onChange={this.handleCheck}
          id={id}
        />
        <span className="rmd-checkbox__label">{this.props.label}</span>
        <span className="rmd-checkbox__box-outline">
          <span className="rmd-checkbox__tick-outline" />
        </span>
      </label>
    );
  }
}

export default Checkbox;
