import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class RadioButton extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
  };

  render() {
    const radioClass = classnames({
      'rmd-radio': true,
      'is-checked': this.props.checked,
    });

    return (
      <label className={radioClass}>
        <input
          type="radio"
          className="rmd-radio__input"
          checked={this.props.checked}
          name={this.props.name}
          value={this.props.value}
          readOnly
        />
        <span className="rmd-radio__label">{this.props.label}</span>
        <span className="rmd-radio__outer-circle" />
        <span className="rmd-radio__inner-circle" />
      </label>
    );
  }
}

export default RadioButton;
