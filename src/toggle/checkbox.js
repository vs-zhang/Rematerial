import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Checkbox extends Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    label: PropTypes.string,
    onCheck: PropTypes.func,
  };

  static defaultProps = {
    isChecked: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked,
    };

    this.handleCheck = ::this.handleCheck;
  }

  handleCheck(e) {
    const value = !this.state.isChecked;
    this.setState({ isChecked: value });
    if (this.props.onCheck) {
      this.props.onCheck(e, value);
    }
  }

  render() {
    const checkboxClass = classNames({
      'rmd-checkbox': true,
      'is-checked': this.state.isChecked,
    });

    return (
      <label className={checkboxClass} >
        <input
          type="checkbox"
          className="rmd-checkbox__input"
          checked={this.state.isChecked}
          value={this.state.isChecked}
          onChange={this.handleCheck}
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
