import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'rematerialize';
import Moment from 'moment';

class DatePickerPage extends Component {
  render() {
    return(
      <div>
        <DatePicker />
      </div>
    )
  }
}

export default DatePickerPage;
