import React, { Component, PropTypes } from 'react';
import { FabSpeedDial, FabTrigger, FabActions, Button, Icon, RadioButtonGroup, RadioButton, Checkbox } from 'rematerial';

class FabSpeedDialExample extends Component {

  static displayName = 'FabSpeedDialExample';

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      direction: 'left',
      animationType: 'scale',
    };
    this.handleClick = ::this.handleClick;
    this.handleClickRadio = ::this.handleClickRadio;
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClickRadio(v) {
    this.setState({ direction: v});
  }

  render() {
    const { isOpen, direction } = this.state;
    return (
      <div>
        <div className="docs-fab-speed-dial">
          <FabSpeedDial isOpen={isOpen} direction={direction}>
            <FabTrigger>
              <Button type="fab" onClick={this.handleClick}>
                <Icon name="menu"/>
              </Button>
            </FabTrigger>
            <FabActions>
              <Button type="fab">
                <Icon name="mail_outline"/>
              </Button>
              <Button type="fab">
                <Icon name="call"/>
              </Button>
              <Button type="fab">
                <Icon name="chat_bubble_outline"/>
              </Button>
            </FabActions>
          </FabSpeedDial>
        </div>

        <div className="docs-fab-speed-dial-settings">
          <div className="setting-box">
            <h4>Direction</h4>
            <RadioButtonGroup name="direction-options" selected={this.state.direction} onCheck={this.handleClickRadio}>
              <RadioButton value="up" label="Up" className="docs-radio-button" />
              <RadioButton value="down" label="Down" className="docs-radio-button" />
              <RadioButton value="left" label="Left" className="docs-radio-button" />
              <RadioButton value="right" label="Right" className="docs-radio-button" />
            </RadioButtonGroup>
          </div>

          <div className="setting-box">
            <h4>Open/Closed</h4>
            <Checkbox
              isChecked={this.state.isOpen}
              label="Open"
              onCheck={this.handleClick}
            />
          </div>

          <div className="setting-box">
            <h4>Animation Modes</h4>
            <RadioButtonGroup name="animation-options" selected={this.state.animationType}>
              <RadioButton value="scale" label="Scale" className="docs-radio-button" />
            </RadioButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default FabSpeedDialExample;
