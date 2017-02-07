import React, { Component, PropTypes } from 'react';
import { Checkbox, RadioButtonGroup, RadioButton } from 'rematerialize';

class TogglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxValue: true,
      radioValue: 'first',
    };
    this.handleClickCheckbox = ::this.handleClickCheckbox;
    this.handleChangeRadio = ::this.handleChangeRadio;
  }

  handleClickCheckbox(e, value) {
    this.setState({ checkboxValue: value});
  }

  handleChangeRadio(e, value) {
    this.setState({ radioValue: value});
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

        <RadioButtonGroup
          name="options"
          selected={this.state.radioValue}
          onCheck={this.handleChangeRadio}
        >
          <RadioButton
            value="first"
            label="First"
          />
          <RadioButton
            value="second"
            label="Second"
          />
        </RadioButtonGroup>
        <p>The value of radio group is {this.state.radioValue}</p>
      </div>
    )
  }
}

export default TogglePage;
