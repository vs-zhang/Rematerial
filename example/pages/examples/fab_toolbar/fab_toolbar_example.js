import React, { Component } from 'react';
import { Button, Icon, FabTrigger, FabActions, RadioButtonGroup, RadioButton, Checkbox, FabToolbar } from 'rematerial';

class FabToolbarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      direction: 'right',
    };
    this.handleClickTrigger = ::this.handleClickTrigger;
    this.handleClickRadio = ::this.handleClickRadio;
  }

  handleClickTrigger() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClickRadio(d) {
    this.setState({ direction: d });
  }

  render() {
    const { isOpen, direction } = this.state;
    return (
      <div>
        <FabToolbar direction={direction} isOpen={isOpen}>
          <FabTrigger>
            <Button type="fab" onClick={this.handleClickTrigger}>
              <Icon name="menu" />
            </Button>
          </FabTrigger>
          <FabActions>
            <Button type="fab">
              <Icon name="comment" />
            </Button>
            <Button type="fab">
              <Icon name="photo" />
            </Button>
          </FabActions>
        </FabToolbar>

        <div className="docs-fab-speed-dial-settings">
          <div className="setting-box">
            <h4>Direction</h4>
            <RadioButtonGroup name="direction-options" selected={direction} onCheck={this.handleClickRadio}>
              <RadioButton value="left" label="Left" className="docs-radio-button" />
              <RadioButton value="right" label="Right" className="docs-radio-button" />
            </RadioButtonGroup>
          </div>

          <div className="setting-box">
            <h4>Open/Closed</h4>
            <Checkbox
              isChecked={isOpen}
              label="Open"
              onCheck={this.handleClickTrigger}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FabToolbarExample;
