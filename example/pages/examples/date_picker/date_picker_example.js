import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'rematerial';
import Moment from 'moment';

class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '03/15/2017',
    };
    this.handleChange = ::this.handleChange;
  }

  handleChange(v) {
    this.setState({value: v});
  }

  render() {
    return (
      <div>
        <DatePicker
          year={2017}
          month={2}
          defaultDate={Moment(`${this.state.value}`, 'MM/DD/YYYY').toDate()}
          onChange={this.handleChange}
        />
        <p>The value of the date picker is {this.state.value}</p>
      </div>
    )
  }
}

export default DatePickerExample;
