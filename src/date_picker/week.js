import React, { Component, PropTypes } from 'react';
import Day from './day';

class Week extends Component {
  render() {
    const weekElements = this.props.week.map((day) => {
      return (
        <Day
          day={day}
          key={day.toString()}
          format={this.props.format}
          month={this.props.month}
          current={this.props.current}
          handleSelect={this.props.handleSelect}/>
      );
    });

    return(
      <div className="rmd-date-picker__week">
        {weekElements}
      </div>
    )
  }
}

export default Week;
