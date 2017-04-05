import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

class RadioButton extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    name: 'options',
    checked: false,
  };

  render() {
    const radioClass = classnames({
      'rmd-radio': true,
      'is-checked': this.props.checked,
    }, this.props.className);
    const id = _.uniqueId('rmd-radio');
    return (
      <div className="rmd-radio-wrapper">
        <label className={radioClass} htmlFor={id}>
          <input
            id={id}
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
      </div>
    );
  }
}

export default RadioButton;
