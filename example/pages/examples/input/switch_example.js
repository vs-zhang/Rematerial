import React, { Component } from 'react';
import { Switch } from 'rematerial';

class SwitchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
    };
  }

  handleToggle = (status) => {
    this.setState({ switchValue: status });
  };

  render() {
    return (
      <div>
        <Switch label="Subscribe" isOn={this.state.switchValue} onToggled={this.handleToggle} />
        <p>The value of switch is {this.state.switchValue.toString()}</p>
      </div>
    );
  }
}

export default SwitchExample;
