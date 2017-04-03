import React, { Component, PropTypes } from 'react';
import { Checkbox, RadioButtonGroup, RadioButton } from 'rematerial';

class RadioButtonsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'first',
    };
    this.handleChangeRadio = ::this.handleChangeRadio;
  }

  handleChangeRadio(value) {
    this.setState({ radioValue: value});
  }

  render() {
    return (
      <div>
        <RadioButtonGroup
          name="options"
          selected={this.state.radioValue}
          onCheck={this.handleChangeRadio}
        >
          <RadioButton
            value="first"
            label="First"
            className="docs-radio-button"
          />
          <RadioButton
            value="second"
            label="Second"
            className="docs-radio-button"
          />
        </RadioButtonGroup>
        <p>The value of radio group is {this.state.radioValue}</p>
      </div>
    );
  }
}

export default RadioButtonsExample;
