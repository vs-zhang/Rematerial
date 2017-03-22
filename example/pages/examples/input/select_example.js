import React, { Component, PropTypes } from 'react';
import { Select } from 'rematerial';

class SelectExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'boston',
    };

    this.handleChange = ::this.handleChange;
  }

  handleChange(value) {
    this.setState({selected: value});
  }

  render() {
    const options = [
      {name: 'Boston', value: 'boston'},
      {name: 'Quincy', value: 'quincy'},
      {name: 'Cambridge', value: 'cambridge'}
    ];

    return (
      <div>
        <Select
          options={options}
          selected={this.state.selected}
          onChange={this.handleChange}
        />
        <p>The value of slide is {this.state.selected}</p>
      </div>
    )
  }
}

export default SelectExample;
