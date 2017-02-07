import React, { Component, PropTypes } from 'react';

class DatePickerHeader extends Component {
  render() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayHeaderElements = days.map((d) => {
      return <div key={d}>{d}</div>;
    });
    return(
      <div className="rmd-date-picker__header">
        {dayHeaderElements}
      </div>
    )
  }
}

export default DatePickerHeader;
