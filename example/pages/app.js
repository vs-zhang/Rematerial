import React, { Component, PropTypes } from 'react';

import {
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
  Input,
  Textarea,
  DatePicker,
  Icon,
  Sticky,
} from 'rematerial';

import WelcomeImg from '../asset/welcome_card.jpg';

const exampleStyle = {
  margin: 'auto',
  minHeight: '1000px',
  backgroundColor: '#FAFAFA',
};

class App extends Component {
  constructor(props) {
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
        <Chip>
          Chip
        </Chip>
        <Divider />
        <Icon name="keyboard_arrow_left" />
        <Icon name="check_circle"/>
        <Divider />
        <Sticky className="sticky-example" topOffset={64}>
          Something fixed
        </Sticky>
        <Divider />
        <Button type="flat">Button</Button>
        <Button type="fab">+</Button>
        <Button type="raised">Raise Button</Button>
        <Divider />
        <Button type="raised" onClick={this.openDialog}>Dialog</Button>
        <Dialog
          open={this.state.open}
          actions={dialogActions}
        >
          hello world
        </Dialog>
        <Divider />
        <Card
          title="Welcome"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
          actions={cardActions}
          img={WelcomeImg}
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
        <Button type="raised" onClick={this.handleClickSnackbar}>Show Snackbar</Button>
        <Snackbar
          open={this.state.openSnackbar}
          duration={0.5}
          text="hello"
        />
        <Divider />
        <div>
          <Tooltip
            text="hello top"
            placement="top"
          >
            <a href="#">Tooltip top</a>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            text="hello right"
            placement="right"
          >
            <a href="#">Tooltip right</a>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            text="hello bottom"
            placement="bottom"
          >
            <a href="#">Tooltip bottom</a>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            text="hello left"
            placement="left"
          >
            <a href="#">Tooltip left</a>
          </Tooltip>
        </div>

        <Divider />
        <div>
          <div>
            <Input label="Basic Input"/>
          </div>
          <div>
            <Input
              label="Input with default value"
              defaultValue="default value"
            />
          </div>
          <div>
            <Input
              label="Floating Label"
              floatingLabel={true}
              defaultValue="abcd"
            />
          </div>
          <div>
            <Textarea
              label="Floating Textarea"
              floatingLabel={true}
              defaultValue="Textarea"
            />
          </div>
          <div>
            <Textarea
              rows="4"
              cols="50"
              label="Floating Textarea"
              floatingLabel={true}
              defaultValue="Textarea"
            />
          </div>
        </div>
        <Divider />
        <DatePicker />
      </div>
    )
  }
}

export default App;
