import React, { Component, PropTypes } from 'react';

import {
  Demo,
  Divider,
  Chip,
  Button,
  Dialog,
  Card,
  Slider,
  Checkbox,
  RadioButton,
  RadioButtonGroup,
  Tooltip,
  Snackbar,
} from '../';

const exampleStyle = {
  margin: 'auto',
  width: '1200px',
  border: '1px solid black',
  padding: '10px 0',
  minHeight: '600px',
};

class App extends Component {
  constructor(props, content) {
    super(props);
    this.state = {
      open: false,
      sliderValue: 20,
      checkboxValue: true,
      radioValue: 'first',
      openSnackbar: false,
    };

    this.openDialog = ::this.openDialog;
    this.closeDialog = ::this.closeDialog;
    this.handleChangeSlider = ::this.handleChangeSlider;
    this.handleClickCheckbox = ::this.handleClickCheckbox;
    this.handleChangeRadio = ::this.handleChangeRadio;
    this.handleClickSnackbar = ::this.handleClickSnackbar;
  }

  openDialog() {
    this.setState({open: true});
  }

  closeDialog() {
    this.setState({open: false});
  }

  handleChangeSlider(e, value) {
    this.setState({sliderValue: value});
  }

  handleClickCheckbox(e, value) {
    this.setState({checkboxValue: value});
  }

  handleChangeRadio(e, value) {
    this.setState({radioValue: value});
  }

  handleClickSnackbar(e) {
    this.setState({openSnackbar: true});
  }

  render() {
    const dialogActions = [
      <Button onClick={this.closeDialog}>Cancel</Button>,
      <Button>Submit</Button>
    ];
    const cardActions = [
      <Button>GET STARTED</Button>,
    ];

    return (
      <div style={exampleStyle}>
        <h1>Examples</h1>
        <Divider />
        <Chip>
          Chip
        </Chip>
        <Divider />
        <Button type="flat">Button</Button>
        <Button type="fab">+</Button>
        <Button type="raised">Raise Button</Button>
        <Divider />
        <Button type="flat" onClick={this.openDialog}>Dialog</Button>
        <Dialog
          open={this.state.open}
          actions={dialogActions}
        >
          hello world
        </Dialog>
        <Divider />
        <Card
          title="Welcome"
          text="hello world"
          actions={cardActions}
        />
        <Divider />
        <Slider
          value={this.state.sliderValue}
          onChange={this.handleChangeSlider}
        />
        <p>The value of slider is {this.state.sliderValue}</p>
        <Divider />
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
        <Divider />
        <a onClick={this.handleClickSnackbar}>haha</a>
        <Snackbar
          open={this.state.openSnackbar}
          duration="0.5"
          text="hello"
        />
        <Divider />
        <Tooltip />
      </div>
    )
  }
}

export default App;
