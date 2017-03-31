import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

class Switch extends Component {
  static propTypes = {
    isOn: PropTypes.bool,
    label: PropTypes.string,
    onToggled: PropTypes.func,
  };

  static defaultProps = {
    isOn: false,
    label: '',
    onToggled: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isOn,
    };
  }

  handleClick = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
    this.props.onToggled(!isChecked);
  };

  render() {
    const classes = classNames({
      'rmd-switch': true,
      'is-checked': this.state.isChecked,
    });
    const id = _.uniqueId('rmd-switch');
    return (
      <label className={classes} htmlFor={id}>
        <input type="checkbox" className="rmd-switch__input" id={id} onClick={this.handleClick} />
        <span className="rmd-switch__label">{this.props.label}</span>
        <div className="rmd-switch__track" />
        <div className="rmd-switch__thumb" />
      </label>
    );
  }
}

export default Switch;
