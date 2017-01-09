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
  Tooltip,
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
    };

    this.openDialog = ::this.openDialog;
    this.closeDialog = ::this.closeDialog;
    this.handleChangeSlider = ::this.handleChangeSlider;
    this.handleClickCheckbox = ::this.handleClickCheckbox;
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

  render() {
    const actions = [
      <Button onClick={this.closeDialog}>Cancel</Button>,
      <Button>Submit</Button>
    ];

    return (
      <div style={exampleStyle}>
        <h1>Examples</h1>
        <Divider />
        <Chip>
          Chip
        </Chip>
        <Divider />
        <h4>Button</h4>
        <Button type="flat">Button</Button>
        <Button type="fab">+</Button>
        <Button type="raised">Raise Button</Button>
        <Divider />
        <Button type="flat" onClick={this.openDialog}>Dialog</Button>
        <Dialog
          open={this.state.open}
          actions={actions}
        />
        <Divider />
        <Card />
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
        <Divider />
        <Tooltip />
      </div>
    )
  }
}

export default App;
