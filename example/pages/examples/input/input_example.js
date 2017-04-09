import React, { Component } from 'react';
import { Input } from 'rematerial';

class BasicInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Basic Input',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <Input label=" Basic Input " value={this.state.value} onChange={this.handleChange} />
        <br />
        <Input label=" Floating Label... " floatingLabel />
      </div>
    );
  }
}

export default BasicInput;
