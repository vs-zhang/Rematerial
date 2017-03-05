import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'rematerial';

class CheckboxExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxValue: true,
    };
    this.handleClickCheckbox = ::this.handleClickCheckbox;
  }

  handleClickCheckbox(value) {
    this.setState({ checkboxValue: value});
  }

  render() {
    return (
      <div>
        <Checkbox
          isChecked={this.state.checkboxValue}
          label="Checkbox"
          onCheck={this.handleClickCheckbox}
        />
        <p>The value of checkbox is {this.state.checkboxValue.toString()}</p>
      </div>
    )
  }
}

export default CheckboxExample;
